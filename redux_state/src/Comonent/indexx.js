import React, { Component } from 'react';
import { connect } from "react-redux"

class Component_ extends Component {
    render() {
        console.log(this.props.isLoader)

        return (
            <div className="App">
                <h1> Welcome to {this.props.isLoader.name} </h1>
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

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Component_)


