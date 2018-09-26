import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsStack from '../../components/draggable-cards-stack';

const WorkerCardList = ({
 workerReducer,
 onDragStop,
}) => (
  <DraggableCardsStack
    items={workerReducer ? workerReducer.workers : []}
    onDragStop={onDragStop}
  />
);

WorkerCardList.propTypes = {
  workerReducer: PropTypes.objectOf(PropTypes.any),
};

WorkerCardList.defaultProps = {
  workerReducer: {},
};

export default WorkerCardList;