import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './App/components/layouts/header';
import { Provider } from 'react-redux';
import store from './App/redux/store';
import { TopicForwarder } from './App/app';


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/:topic" component={TopicForwarder} />
        </Switch>
      </Router>
  </Provider>,
  document.querySelector('#root'),
);
