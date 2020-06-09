import * as ActionTypes from './ActionTypes';

export const quotes = (state = {
    isLoading: true,
    errMess: null,
    entries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_QUOTES:
            return { ...state, isLoading: false, errMess: null, quotes: action.payload };

        case ActionTypes.QUOTES_LOADING:
            return { ...state, isLoading: true, errMess: null, quotes: [] };

        case ActionTypes.QUOTES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};