import React from "react";
import { Container, Button, Box } from "@material-ui/core";
import { IContent, IAnswer, IResult } from "./models/contentInterface";
import { addResult, addAnswer } from "./redux/actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import getCaloriesResultService from "./services/caloriesResultService";
import Question from "./components/features/question";
import Start from "./components/features/start";
import Result from "./components/features/result";
import "./app.css"

export const App = () => {
  const dispatch = useDispatch();
  const content: IContent = useSelector((state: any) => state.content, shallowEqual)
  const answers: Array<IAnswer> = useSelector((state: any) => state.answers, shallowEqual)
  const result: IResult = useSelector((state: any) => state.result, shallowEqual)

  const renderStart = () => {
    if (!answers.length) {
      return (
        <Start handler={() => dispatch(addAnswer({ inputComponentTag: "initial", value: 0 }))} title={content.title} />
      )
    }
  }

  const renderQuestions = () => {
    const questions = content.questionnaire.map((question, index) => {
      if (index < answers.length)
        return <Question key={index} inputComponentTag={question.inputComponentTag} title={question.title} />
      else return <div key={index}></div>
    })
    return [<Container key="container" maxWidth="md" className="questionContainer">{questions}</Container >]
  }

  const renderResultButton = () => {
    return (
      <Box key="resultButton" display="flex" justifyContent="center">
        <Box margin={2} width="200px">
          <Button
            fullWidth={true}
            onClick={() => calculateResult()}
            variant="contained"
            color="primary" >
            Calculate Result
            </Button>
        </Box>
      </Box>
    )
  }

  const calculateResult = (): IResult | undefined => {
    switch (content.topic) {
      case "calories":
        const caloriesResult = getCaloriesResultService(answers)
        if (caloriesResult) dispatch(addResult(caloriesResult))
        break;

      default:
        return
    }
  }

  const renderResult = () => {
    return <Result />
  }

  const renderContent = () => {
    if (answers.length)
      if (result.value) return renderResult()
      else if (content.questionnaire.length === answers.length - 1)
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
    } catch { }
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