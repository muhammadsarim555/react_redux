import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from "react-redux";
import store from "./store/index";
import Component_ from "./Comonent/indexx";
import { isLoaderAction } from "./store/action/action.js";



class App extends Component {
  render() {

    return (
      <div className="App">

        <Provider store={store} >
          <Component_ />
        </Provider>

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

