import React, { Component } from 'react';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    
    {},
    applyMiddleware(thunk)
)

export default store;
