import React, { Component } from 'react';
import CustomRoutes from './Routes';
import {Provider} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <CustomRoutes/> */}
      <h1> I am home from app.js </h1>
      {/* <Link to="/"> home </Link> */}

      </div>
    );
  }
}

export default App;