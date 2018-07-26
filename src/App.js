import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";
import createHistory from "history/createHashHistory";
import {Router} from 'react-router-dom'
import Root from './root';
import zhCN from './language/zh';
import enUS from './language/en';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en, ...zh]);
const history = createHistory();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);
class App extends Component {
  componentWillMount() {
    let self = this;
    if (localStorage.lang) {
      if (localStorage.lang === 'Chinese') {
        self.setState({
          locale: 'zh',
          messages: zhCN
        });
      } else {
        self.setState({
          locale: 'en',
          messages: enUS
        });
      }
    } else {
      self.setState({
        locale: 'en',
        messages: enUS
      });
    }
  }
  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <Provider store={store}>
          <Router history={history}>
            <Root />
          </Router>
        </Provider>
      </IntlProvider>
    );
  }
}
export default App;
