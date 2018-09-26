import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsStack from '../../components/draggable-cards-stack';

const WorkerCardList = ({
  workerReducer,
  likeWorker,
  dislikeWorker,
}) => (
  <DraggableCardsStack
    items={workerReducer ? workerReducer.workers : []}
    onSwipeRight={likeWorker}
    onSwipeLeft={dislikeWorker}
  />
);

WorkerCardList.propTypes = {
  workerReducer: PropTypes.objectOf(PropTypes.any),
  likeWorker: PropTypes.func,
  dislikeWorker: PropTypes.func,
};

WorkerCardList.defaultProps = {
  workerReducer: {},
  likeWorker: () => {},
  dislikeWorker: () => {},
};

export default WorkerCardList;
