import actionTypes from '../../action-types';

export const getUsers = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_USERS,
    payload: [{ name: 'User 1' }],
  });
};

export default {
  getUsers,
}