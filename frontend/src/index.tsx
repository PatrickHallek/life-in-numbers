import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './App/components/layouts/header';
import { Provider } from 'react-redux';
import store from './App/redux/store';
import { TopicForwarder } from './App/topicForwarder';
import { ComingSoon } from './App/components/features/comingSoon'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={TopicForwarder} />
        <Route exact path="/:topic" component={TopicForwarder} />
        <Route exact path="/coming-soon/:topic" component={ComingSoon} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
