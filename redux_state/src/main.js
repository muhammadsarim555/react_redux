import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store/index'
import {connect} from 'react-redux';
import App from './App';

class Main extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}> 
        <App />
      </Provider> 
        
      </div>
    );
  }
}


function mapStateToProps(states){
  return({
      userName:states.root.name,
  })
}

  function mapDispatchToProps()  { 
  return({

  })
}

export default connect(mapStateToProps , mapDispatchToProps )(Main);
