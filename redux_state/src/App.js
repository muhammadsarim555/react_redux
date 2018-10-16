import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    // console.log(this.props.name);
    return (
      <div className="App">
      {/* <Provider store={store}>  */}
        <h1> First Redux  </h1>

      {/* </Provider>  */}
        
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

