import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { connect } from 'react-redux';
import Component_ from "./Comonent/indexx"


class App extends Component {
  render() {

    return (
      <div className="App">

        <h1> First Redux  </h1>
        <Component_ />

      </div>
    );
  }
}


// function mapStateToProps(states){
//   return({
//       userName:states.root.name,
//   })
// }

//   function mapDispatchToProps()  { 
//   return({

//   })
// }

export default App;
//  connect(mapStateToProps , mapDispatchToProps )(App);

