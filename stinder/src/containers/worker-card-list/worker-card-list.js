import React from 'react';
import PropTypes from 'prop-types';

import DraggableCards from '../../components/draggable-cards';

const WorkerCardList = ({
 workerReducer,
}) => (
  <DraggableCards
    items={workerReducer ? workerReducer.workers : []}
  />
);

WorkerCardList.propTypes = {
  workerReducer: PropTypes.objectOf(PropTypes.any),
};

WorkerCardList.defaultProps = {
  workerReducer: {},
};

export default WorkerCardList;