import actionTypes from '../action-types';

export default (state = { likedWorkers: [], dislikedWorkers: [] }, action) => {
  switch (action.type) {
    case actionTypes.LIKE_WORKER:
      return {
        result: action.payload,
      };
    case actionTypes.DISLIKE_WORKER:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};