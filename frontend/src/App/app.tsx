import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import Question from "./components/features/question";
import Start from "./components/features/start";
import { IContent, IAnswer } from "./models/contentInterface";
import { updateAnswer, changeContent } from "./redux/reducer/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import "./app.css"
import { useParams } from "react-router";
import getContent from "./services/contentService";

export const TopicForwarder = () => {
  const { topic } = useParams<{ topic: string }>()
  const initialComponentContent = getContent(topic)

  const dispatch = useDispatch();
  dispatch(changeContent(initialComponentContent))
  return <App />
}

export const App = () => {
  const dispatch = useDispatch();
  const content: IContent = useSelector((state: any) => state.content, shallowEqual)

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: content.colorTheme.primary
      },
      secondary: {
        main: content.colorTheme.secondary
      },
      error: {
        main: "#ff0000"
      },
      background: {
        default: content.colorTheme.background
      }
    }
  });




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

  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        {renderStart()}
        <Container maxWidth="md" className="questionContainer">
          {renderQuestions()}
        </Container >
      </div>
    </ThemeProvider>
  );
}