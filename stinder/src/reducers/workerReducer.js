import actionTypes from '../action-types';
import data from '../mock-data/workers.json';

// This reducer would in practice be used to make a request to the backend
// for the worker data. For the sake of time I have used mock data
// To make the request I would have used 'redux-promise' and potentially 'axios'
// or a similar library

export default (state = data, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKERS:
      return {
        workers: action.payload,
      };
    default:
      return state;
  }
};
