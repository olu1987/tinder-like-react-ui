import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsStack from '../../components/draggable-cards-stack';

const WorkerCardList = ({
  workerReducer,
  onSwipeRight,
  onSwipeLeft,
  userReducer,
}) => (
  <DraggableCardsStack
    items={workerReducer ? workerReducer.workers : []}
    onSwipeRight={onSwipeRight}
    onSwipeLeft={onSwipeLeft}
    itemToSlideRight={userReducer.likedWorkers[userReducer.likedWorkers.length - 1]}
    itemToSlideLeft={userReducer.dislikedWorkers[userReducer.dislikedWorkers.length - 1]}
  />
);

WorkerCardList.propTypes = {
  workerReducer: PropTypes.objectOf(PropTypes.any),
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func,
};

WorkerCardList.defaultProps = {
  workerReducer: {},
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

export default WorkerCardList;
