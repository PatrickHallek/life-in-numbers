import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme';
import Header from './App/components/layouts/header';
import App from './App/app';
import { Provider } from 'react-redux';
import store from './App/redux/store';


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/:topic" component={App} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
