import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Question from "../../components/question";
import Banner from "../../components/banner";
import GetContent, { IContent, IContentQuestionnaire } from "../../services/content";
import "./index.css"

interface IParamTypes {
  topic: string
}

const Index = () => {

  const { topic } = useParams<IParamTypes>();
  const content: IContent = GetContent(topic)

  const [questions, addQuestion] = useReducer(
    (questions: Array<IContentQuestionnaire>,
      { title, inputComponentTag }: IContentQuestionnaire) => {
      return [...questions, { title, inputComponentTag }]
    }, []);

  const [answers, addAnswer] = useReducer(
    (answers: Array<any>, answer: string) => [...answers, { answer }], [{ "sex": 1.6 }])

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

  const startQuestionnaire = () => {
    dismissStart()
    showNextQuestion()
  }

  const setAnswer = () => {
    addAnswer("no")
    showNextQuestion()
  }

  const showNextQuestion = async () => {
    const { questionnaire } = content
    const newQuestion = questionnaire[questions.length]
    if (newQuestion) {
      await showLoadingDots()
      addQuestion(newQuestion)
      const questionContainer = document.querySelector(".questionContainer")
      if (questionContainer) questionContainer.scrollTop = questionContainer.scrollHeight
    }
  }

  const showLoadingDots = () => {
    return new Promise((resolve: any) => {
      const questionElements = document.querySelectorAll(".question")
      const lastQuestionElement = questionElements[questionElements.length - 1]
      if (lastQuestionElement) {
        const dotsElement = document.createElement("div")
        dotsElement.className = "loadingDots"
        lastQuestionElement.appendChild(dotsElement)
        setTimeout(() => {
          lastQuestionElement.removeChild(dotsElement)
          resolve()
        }, 500 + Math.random() * 1500)
      } else resolve()
    })
  }

  const dismissStart = () => {
    document.querySelector(".startBox")?.setAttribute("style", "display: none; opacity: 0")
  }

  const resultCalculationButton = () => {
    if (answers.length === content.questionnaire.length) {
      return <Button variant="contained" color="primary">Calculate Result</Button>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="root">
        <Banner handler={startQuestionnaire} title={title} />
        <Container maxWidth="md" className="questionContainer">
          {questions.map((question, index) => <Question key={index} handler={setAnswer} inputComponentTag={question.inputComponentTag} title={question.title} />)}
          <Box display="flex" justifyContent="center" m={3}>
            {resultCalculationButton()}
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Index;
