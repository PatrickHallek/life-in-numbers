import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import getContent from "./services/contentService";
import { useParams } from "react-router-dom";
import Question from "./components/features/question";
import Start from "./components/features/start";
import { IContent, IAnswer } from "./models/contentInterface";
import { addAnswer } from "./redux/reducer/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import "./app.css"

const App = () => {
  const dispatch = useDispatch();
  const { topic } = useParams<{ topic: string }>()
  const initialComponentContent = getContent(topic)
  //   dispatch(changeContent(initialComponentContent))

  const content: IContent = useSelector((state: any) => state.content, shallowEqual)
  console.log(content)


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

  const answerDispatcher = ({ inputComponentTag, value }: IAnswer) => {
    dispatch(addAnswer({ inputComponentTag, value }));
  }

  const renderStart = () => {
    if (content.answers.length < 1) {
      return (
        <Container maxWidth="lg" className="container">
          <Start handler={answerDispatcher} title={content.title} />
        </Container>
      )
    }
  }

  const renderQuestions = () => {
    return content.questionnaire.map((question, index) => {
      if (index < content.answers.length)
        return (
          <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
        )
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        {renderStart()}
        <Container maxWidth="md" className="container">
          {renderQuestions()}
        </Container >
      </div>
    </ThemeProvider>
  );
};

export default App;
