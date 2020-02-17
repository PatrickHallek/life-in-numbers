import React, { Component } from "react";
import { Container } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

import Question from "./question";
import Header from "../layouts/header";
import GetContent from "../../services/content";
import { ContentI } from "../../services/content";
import Start from "./start";

import "./index.css"

class Index extends Component {

  subscription: any;

  startQuestionnaire = async () => {
    this.dismissStart()
    const { questionnaire } = this.state.content
    const questions = <Question key={questionnaire[0].id} handler={this.showNextQuestion} title={questionnaire[0].title} />
    this.setState({ questions })
  }

  showNextQuestion = async () => {
    const { questions } = this.state
    const newQuestion = this.state.content.questionnaire[questions.length]
    if (newQuestion) {
      questions.push(newQuestion)
      const content = await new Promise(resolve => {
        resolve(questions.map((question: any) => <Question key={question.id} handler={this.showNextQuestion} title={question.title} />))
      })
      this.setState({ content })
    }
  }

  dismissStart() {
    document.querySelector(".startBox")?.setAttribute("style", "margin-top:-800px; opacity: 0")
  }

  state: any = {
    content: GetContent("Calories"),
    questions: [],
    start: < Start handler={this.startQuestionnaire} title="Test test test" />
  }

  render() {
    const { start } = this.state;
    const { questions } = this.state;
    return (
      <div className="root">
        <Header />
        <Container maxWidth="lg">
          {start}
        </Container>
        <Container maxWidth="md">
          {questions}
        </Container>
      </div>
    );
  }

};

export default Index;
