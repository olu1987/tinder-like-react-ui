import actionTypes from '../action-types';
import data from '../mock-data/workers.json';

export default (state = data, action) => {
  switch (action.type) {
    case actionTypes.GET_WORKERS:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
