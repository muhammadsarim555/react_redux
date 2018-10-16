import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import connect from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}> 
        <h1> First Redux {this.props.userName} </h1>
      </Provider> 
        
      </div>
    );
  }
}


function mapStateToProps(state){
  return({
      userName:state.root.name,
  })
}

function mapDispatchToProps(){
  return({

  })
}

export default connect(mapStateToProps , mapDispatchToProps )(App);
