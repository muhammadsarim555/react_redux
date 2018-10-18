import React, { Component } from 'react';
import App from './App';
import { isLoaderAction } from "./store/action/action.js"
import { connect } from 'react-redux';

import { Provider } from "react-redux"
import store from "./store/index"


class Main extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
          <App />
        </Provider>
      </div>
    );
  }
}


export default Main;
