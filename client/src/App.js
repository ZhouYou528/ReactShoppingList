import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authAction';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
