import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme';
import Header from './App/components/layouts/header';
import App from './App/app';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:topic" component={App} />
        <Route path="/">
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </Route>
      </Switch>
    </Router>


  </ThemeProvider>,
  document.querySelector('#root'),
);
