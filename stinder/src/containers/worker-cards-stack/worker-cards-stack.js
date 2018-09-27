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
    placeHolderText={"Sorry, looks like thats your limit of swipes"}
    itemToSlideRight={userReducer.likedWorkers[userReducer.likedWorkers.length - 1]}
    itemToSlideLeft={userReducer.dislikedWorkers[userReducer.dislikedWorkers.length - 1]}
  />
);

WorkerCardList.propTypes = {
  workerReducer: PropTypes.objectOf(PropTypes.any),
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func,
  userReducer: PropTypes.objectOf(PropTypes.any),
};

WorkerCardList.defaultProps = {
  workerReducer: {},
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
  userReducer: {},
};

export default WorkerCardList;
