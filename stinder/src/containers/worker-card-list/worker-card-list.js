import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsList from '../../components/draggable-cards-list';

const WorkerCardList = ({
 workerReducer,
 onDragStop,
}) => (
  <DraggableCardsList
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