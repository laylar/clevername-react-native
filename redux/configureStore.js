import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { entries } from './entries';
//placeholder for quotes to be added
//import {quotes} from './quotes'; 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            entries,
            //quotes
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}