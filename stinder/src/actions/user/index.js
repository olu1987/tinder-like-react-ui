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

export default {
  likeWorker,
  dislikeWorker,
};
