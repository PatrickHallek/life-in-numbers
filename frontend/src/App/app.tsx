import React, { useReducer, useState } from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import GetContent, { IContent, IContentQuestionnaire } from "./services/content";
import { useParams } from "react-router-dom";
import "./app.css"
import Question from "./components/features/question";
import Start from "./components/features/start";

interface IParamTypes {
  topic: string
}

const App = () => {

  const { topic } = useParams<IParamTypes>();
  const content: IContent = GetContent(topic)
  const [questions, addQuestion] = useReducer(
    (questions: Array<IContentQuestionnaire>,
      { title, inputComponentTag }: IContentQuestionnaire) => {
      return [...questions, { title, inputComponentTag }]
    }, []);
  const [resultCalculationButton, setResultCalculationButton] = useState()
  const { title } = content;
  const { colorTheme } = content
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colorTheme.primary
      },
      secondary: {
        main: colorTheme.secondary
      },
      error: {
        main: "#ff0000"
      },
      background: {
        default: colorTheme.background
      }
    }
  });

  const startQuestionnaire = async () => {
    dismissStart()
    showNextQuestion()
  }

  const showNextQuestion = async () => {
    const { questionnaire } = content
    const newQuestion = questionnaire[questions.length]
    if (newQuestion) { addQuestion(newQuestion) }
  }

  const dismissStart = () => {
    document.querySelector(".startBox")?.setAttribute("style", "display: none; opacity: 0")
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Container maxWidth="lg" className="container">
          <Start handler={startQuestionnaire} title={title} />
        </Container>
        <Container maxWidth="md" className="container">
          {questions.map((question, index) => <Question key={index} handler={showNextQuestion} inputComponentTag={question.inputComponentTag} title={question.title} />)}
          {resultCalculationButton}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
