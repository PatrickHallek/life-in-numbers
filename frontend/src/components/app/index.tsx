import React, { Component } from "react";
import Question from "./question";
import Header from "../layouts/header";
import { Container } from "@material-ui/core";
import Start from "./start";
import "./index.css"

class Index extends Component {

  startQuestionnaire = async () => {
    this.dismissStart()
    const { questionnaireState } = this.state
    const content = <Question key={questionnaireState[0].id} handler={this.showNextQuestion} title={questionnaireState[0].title} />
    this.setState({ content })
  }

  showNextQuestion = async () => {
    const { questionnaireState } = this.state
    const newQuestion = this.state.questionnaire[questionnaireState.length]
    if (newQuestion) {
      questionnaireState.push(newQuestion)
      const content = await new Promise(resolve => {
        resolve(questionnaireState.map(question => <Question key={question.id} handler={this.showNextQuestion} title={question.title} />))
      })
      this.setState({ content })
    }

  }

  dismissStart() {
    document.querySelector(".startBox")?.setAttribute("style","margin-top:-800px; opacity: 0")
  }

  state = {
    content: false,
    start: <Start handler={this.startQuestionnaire} />,
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
        </Container>
        <Container maxWidth="md">
          {this.state.content}
        </Container>
      </div>
    );
  }

};

export default Index;
