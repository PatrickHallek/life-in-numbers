import React, { useEffect } from "react";
import { Container, CssBaseline, Button, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { IContent } from "./models/contentInterface";
import { updateAnswer, changeContent, addResult } from "./redux/reducer/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
import getCaloriesResult from "./services/caloriesResultService"
import getContent from "./services/contentService";
import Question from "./components/features/question";
import Start from "./components/features/start";
import Result from "./components/features/result";
import "./app.css"

export const TopicForwarder = () => {
  const { topic } = useParams<{ topic: string }>()
  const initialComponentContent = getContent(topic)
  const dispatch = useDispatch()
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: initialComponentContent.theme.primary
      },
      secondary: {
        main: initialComponentContent.theme.secondary
      },
      background: {
        default: initialComponentContent.theme.background
      }
    }
  })

  useEffect(() => {
    dispatch(changeContent(initialComponentContent))
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

export const App = () => {
  const dispatch = useDispatch();
  const content: IContent = useSelector((state: any) => state.content, shallowEqual)

  const renderStart = () => {
    if (content.answers?.length === undefined) {
      return (
        <Start handler={() => dispatch(updateAnswer({ inputComponentTag: "initial", value: 0 }))} title={content.title} />
      )
    }
  }

  const renderQuestions = () => {
    const questions = content.questionnaire.map((question, index) => {
      if (content.answers) {
        if (index < content.answers.length)
          return <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
        else return <div key={index}></div>
      }
      else return <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
    })
    return [<Container key="container" maxWidth="md" className="questionContainer">{questions}</Container >]
  }

  const renderResultButton = () => {
    return (
      <Box key="resultButton" display="flex" justifyContent="center">
        <Box margin={2} width="200px">
          <Button fullWidth={true} onClick={() => dispatch(addResult(calculateResult()))} variant="contained" color="primary" >Calculate Result</Button>
        </Box>
      </Box>
    )
  }

  const calculateResult = (): { value: number, averageValue?: number } => {
    switch (content.topic) {
      case "calories":
        if (content.answers) return getCaloriesResult(content.answers)
        else return { value: 0 }
      default:
        return { value: 0 }
    }
  }

  const renderResult = () => {
    if (content.result) return <Result />
  }

  const renderContent = () => {
    if (content.answers)
      if (content.result) return renderResult()
      else if (content.questionnaire.length === content.answers.length - 1)
        return [...renderQuestions(), renderResultButton()]
      else return renderQuestions()
    else return renderStart()
  }

  const renderBackgroundImages = () => {
    const { theme } = content
    try {
      return (
        <div>
          <img src={require("./assets/img/" + theme.bottomEllipse)} alt="ellipse" className="backgroundEllipseBottom" />
          <img src={require("./assets/img/" + theme.topEllipse)} alt="ellipse" className="backgroundEllipseTop" />
          <img src={require("./assets/img/" + theme.backgroundImage)} alt="avocado" className="backgroundImage" />
        </div>
      )
    } catch {}
  }

  return (
    <div className="root">
      <Container maxWidth="lg" className="container">
        {renderContent()}
      </Container >
      {renderBackgroundImages()}
    </div>

  );
}