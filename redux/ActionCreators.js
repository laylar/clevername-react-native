import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseUrl';

export const fetchEntries = () => dispatch => {
    return fetch(baseUrl + 'entries')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(entries => dispatch(addEntries(entries)))
        .catch(error => dispatch(entriesFailed(error.message)));
};

export const entriesFailed = errMess => ({
    type: ActionTypes.ENTRIES_FAILED,
    payload: errMess
});

export const addEntries = (entries) => ({
    type: ActionTypes.ADD_ENTRIES,
    payload: entries
});

export const fetchQuotes = () => dispatch => {
    return fetch(baseUrl + 'quotes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(quotes => dispatch(addQuotes(quotes)))
        .catch(error => dispatch(quotesFailed(error.message)));
};

export const quotesFailed = errMess => ({
    type: ActionTypes.QUOTES_FAILED,
    payload: errMess
});

export const addQuotes = (quotes) => ({
    type: ActionTypes.ADD_QUOTES,
    payload: entries
});