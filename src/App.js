import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1> I am home from app.js </h1>
        </Provider>
      </div>
    );
  }
}

export default App;
