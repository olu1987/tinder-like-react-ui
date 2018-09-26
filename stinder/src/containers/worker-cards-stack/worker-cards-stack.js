import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsStack from '../../components/draggable-cards-stack';

const WorkerCardList = ({
  workerReducer,
  onSwipeRight,
  onSwipeLeft,
}) => (
  <DraggableCardsStack
    items={workerReducer ? workerReducer.workers : []}
    onSwipeRight={onSwipeRight}
    onSwipeLeft={onSwipeLeft}
    itemToSlideRight={workerReducer.workers[0]}
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
