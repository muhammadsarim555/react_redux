import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';


console.log(reducer)
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;