import React, { Component } from 'react';
import { connect } from "react-redux";
import { isLoaderAction } from '../store/action/action';


class Component_ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            array: [],
        }
    }

    changeState() {
        let { userName, array } = this.state;
        this.props.changeStateToReducer(this.state.userName);
        array.push(userName)
        console.log(array)
        this.setState({
            userName: '',
        })
    }

    _changeInput(e) {
        let { userName } = this.state;
        // console.log(e.target.value)
        this.setState({
            userName: e.target.value,
        })
        console.log(this.state.userName, "=<<<>>>");
    }

    render() {
        let { userName, array } = this.state;
        // console.log(this.props.isLoader)
        return (
            <div className="App">
                <h1> Welcome to {this.props.isLoader.name} </h1>
                <input value={this.state.userName} placeholder="enter user name" onChange={(e) => this._changeInput(e)} />
                <button onClick={this.changeState.bind(this)}> Change State </button>
                
                {/* render List  */}
                    <ul>
                        {
                            array.map((v , i) => {
                                return <li key={i}> {v} </li>
                            })
                        }
                        </ul>
                
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
        changeStateToReducer: (updatedUserName) => {
            dispatch(isLoaderAction(updatedUserName))
        }
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Component_)


