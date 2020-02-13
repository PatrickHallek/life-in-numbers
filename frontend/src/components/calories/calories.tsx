import React, { Component } from "react";
import AppCard from "../layouts/appCard";
import Header from "../layouts/header";
import { Container } from "@material-ui/core";
import "./calories.css"
import CaloriesStart from "./start";

class Calories extends Component {

  startQuestionnaire = async () => {
    this.dismissStart()
    const { questionnaireState } = this.state
    const content = <AppCard key={questionnaireState[0].id} handler={this.showNextQuestion} title={questionnaireState[0].title} />
    this.setState({ content })
  }

  showNextQuestion = async () => {
    const { questionnaireState } = this.state
    const newQuestion = this.state.questionnaire[questionnaireState.length]
    if (newQuestion) {
      questionnaireState.push(newQuestion)
      const content = await new Promise(resolve => {
        resolve(questionnaireState.map(question => <AppCard key={question.id} handler={this.showNextQuestion} title={question.title} />))
      })
      this.setState({ content })
    }

  }

  dismissStart() {
    const start = false
    this.setState({ start })
  }

  state = {
    content: false,
    start: <CaloriesStart handler={this.startQuestionnaire} />,
    questionnaireState: [{ id: 1, title: "How old are you?", input: 1 }],
    questionnaire: [
      { id: 1, title: "How old are you?", input: 1 },
      { id: 2, title: "How tall are you?", input: 1 },
      { id: 3, title: "How much do you weigt?", input: 1 },
      { id: 4, title: "Wich sex do you have?", input: 1 }
    ]
  }

  render() {
    return (
      <div className="root">
        <Header />
        <Container maxWidth="lg">
          {this.state.start}
          {this.state.content}
        </Container>
      </div>
    );
  }

};

export default Calories;
