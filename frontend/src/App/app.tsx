import React, { useEffect } from "react";
import { Container, CssBaseline, Button, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { IContent } from "./models/contentInterface";
import { updateAnswer, changeContent, addResult } from "./redux/reducer/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
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
        main: initialComponentContent.colorTheme.primary
      },
      secondary: {
        main: initialComponentContent.colorTheme.secondary
      },
      background: {
        default: initialComponentContent.colorTheme.background
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
        <Container maxWidth="lg" className="container">
          <Start handler={() => dispatch(updateAnswer({ inputComponentTag: "initial", value: 0 }))} title={content.title} />
        </Container>
      )
    }
  }

  const renderQuestions = () => {
    return content.questionnaire.map((question, index) => {
      if (content.answers) {
        if (index < content.answers.length)
          return <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
        else return <div key={index}></div>
      }
      else return <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />

    })
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

  const calculateResult = () => {
    const { additions } = content.formula
    let result: number = 0;

    additions.forEach(addition => {
      if (addition.constant) result += addition.constant
      else if (addition.factor && addition.inputComponentTag) {
        const componentAnswer = content.answers?.find(answer => addition.inputComponentTag === answer.inputComponentTag)?.value
        if (componentAnswer) result += addition.factor * componentAnswer
      }
    })
    
    return result
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
    else return <div></div>
  }

  return (
    <div className="root">
      {renderStart()}
      <Container maxWidth="md" className="questionContainer">
        {renderContent()}
      </Container >
    </div>
  );
}