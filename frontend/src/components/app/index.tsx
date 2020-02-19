import React, { useReducer } from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import Question from "./question";
import GetContent, { IContent, IContentQuestionnaire } from "../../services/content";
import Start from "./start";
import { useParams } from "react-router-dom";
import "./index.css"

interface IParamTypes {
  topic: string
}

const Index = () => {

  const { topic } = useParams<IParamTypes>();
  const content: IContent = GetContent(topic)
  const [questions, addQuestion] = useReducer(
    (questions: Array<IContentQuestionnaire>,
      { id, title, inputComponent }: IContentQuestionnaire) => {
      return [...questions, { id, title, inputComponent }]
    }, []);
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
        <Container maxWidth="lg">
          <h1>1</h1>
          < Start handler={startQuestionnaire} title={title} />
        </Container>
        <Container maxWidth="md">
          {questions.map(question => <Question key={question.id} handler={showNextQuestion} title={question.title} />)}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Index;
