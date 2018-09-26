import actionTypes from '../action-types';
import data from '../mock-data/movies.json';

export default (state = data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};