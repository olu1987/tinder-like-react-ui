import actionTypes from '../action-types';

export default (state = { likedWorkers: [], dislikedWorkers: [], activeResource: null }, action) => {
  switch (action.type) {
    case actionTypes.LIKE_WORKER:
      return {
        ...state,
        likedWorkers: [...state.likedWorkers, action.payload],
      };
    case actionTypes.DISLIKE_WORKER:
      return {
        ...state,
        dislikedWorkers: [...state.dislikedWorkers, action.payload],
      };
    case actionTypes.SET_ACTIVE_RESOURCE:
      return {
        ...state,
        activeResource: action.payload,
      };
    default:
      return state;
  }
};