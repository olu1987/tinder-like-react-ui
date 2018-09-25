import actionTypes from '../action-types';
import data from '../mock-data/users.json';

export default (state = data, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
