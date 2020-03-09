import React, { useEffect } from "react";
import { Container, CssBaseline, Button, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { IContent } from "./models/contentInterface";
import { updateAnswer, changeContent } from "./redux/reducer/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router";
import getContent from "./services/contentService";
import Question from "./components/features/question";
import Start from "./components/features/start";
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
    if (content.answers.length < 1) {
      return (
        <Container maxWidth="lg" className="container">
          <Start handler={() => dispatch(updateAnswer({ inputComponentTag: "initial", value: 0 }))} title={content.title} />
        </Container>
      )
    }
  }

  const renderQuestions = () => {
    return content.questionnaire.map((question, index) => {
      if (index < content.answers.length) return (
        <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
      )
      else return <div key={index}></div>
    })
  }

  const renderResultButton = () => {
    if (content.questionnaire.length === content.answers.length - 1) return (
      <Box display="flex" justifyContent="center">
        <Box margin={2} width="200px">
          <Button fullWidth={true} onClick={() => { console.log(1) }} variant="contained" color="primary" >Calculate Result</Button>
        </Box>
      </Box>
    )
  }

  return (
    <div className="root">
      {renderStart()}
      <Container maxWidth="md" className="questionContainer">
        {renderQuestions()}
        {renderResultButton()}
      </Container >
    </div>
  );
}