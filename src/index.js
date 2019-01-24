import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { stat } from 'fs';

//Pizza Reducer

const customerInfo = 
    {
    name: 'John',
    address: '123 FAke St.',
    city: 'Minneapolis',
    zip: '55403',
    type: 'Dine In'}

   


const pizzaReducer = (state = [], action) => {

    return state;
}

//Customer Reducer
const customerReducer = (state = {}, action) => {
    if(action.type === 'CUSTOMER_INFO'){
        return [...state, action.payload];
    }
    return state;
}

//Total Cost Reducer
const totalReducer = (state = 0, action) => {

    return state;
}

//Create store
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        totalReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
