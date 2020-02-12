import React, { Component } from "react";
import BaseCard from "../components/layouts/baseCard";
import Header from "../components/layouts/header";
import CaloriesStart from "../components/calories/caloriesStart";
import { Container } from "@material-ui/core";

class Calories extends Component {
  state = {
    content: <BaseCard />
  }

  render() {
    this.state.content = <CaloriesStart />
    return (
      <div className="root">
        <Header />
        <Container maxWidth="lg">
          {this.state.content}
        </Container>
      </div>
    );
  }

  startQuestionnaire() {
    const { content } = this.state
    return this.state.content == <BaseCard/>
  }
};

export default Calories;
