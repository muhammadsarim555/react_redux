import React, { Component } from 'react';
import { connect } from "react-redux";

import {isLoaderAction} from '../store/action/action';

class Component_ extends Component {



    changeState() {
            this.props.changeStateToReducer()
    }


    render() {
        console.log(this.props.isLoader)
        return (
            <div className="App">
                <h1> Welcome to {this.props.isLoader.name} </h1>
                <button onClick={this.changeState.bind(this)}> Change State </button>
            </div>
        );
    }
}



const mapStateToProp = (state) => {
    // console.log(state.root)
    return ({
        isLoader: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        changeStateToReducer: () => {
            dispatch(isLoaderAction())
        }
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Component_)


