import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
// import {connect} from 'react-redux';

//import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import { stat } from 'fs';

//Pizza Reducer

// const customerInfo = 
//     {
//     name: 'John',
//     address: '123 FAke St.',
//     city: 'Minneapolis',
//     zip: '55403',
//     type: 'Dine In'}

   


const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA'){
        
        const pizzaToAdd = action.payload
        return [...state, pizzaToAdd]
    }else if (action.type === 'REMOVE_PIZZA'){

        return state=state.filter((pizza) => pizza.id!== action.payload.id)
        
    }
        return state;
}

//Customer Reducer
const customerReducer = (state = {}, action) => {
    if(action.type === 'CUSTOMER_INFO'){
        return action.payload;
    }
    return state;
}

//Total Cost Reducer
const totalReducer = (state = 0, action) => {
    if(action.type === 'SET_PIZZA'){
        return ( Number(state) + Number(action.payload.price) );
    }else if (action.type === 'REMOVE_PIZZA'){
        return ( Number(state) - Number(action.payload.price) );
    }

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
