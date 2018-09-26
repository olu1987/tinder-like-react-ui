import actionTypes from '../../action-types';

export const likeWorker = worker => (dispatch) => {
  dispatch({
    type: actionTypes.LIKE_WORKER,
    payload: worker,
  });
};

export const dislikeWorker = worker => (dispatch) => {
  dispatch({
    type: actionTypes.DISLIKE_WORKER,
    payload: worker,
  });
};

export const setActiveResource = resource => (dispatch) => {
  dispatch({
    type: actionTypes.SET_ACTIVE_RESOURCE,
    payload: resource,
  });
};

export default {
  likeWorker,
  dislikeWorker,
};
