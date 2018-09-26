import React from 'react';
import PropTypes from 'prop-types';

import DraggableCardsList from '../../components/draggable-cards-list';

const WorkerCardList = ({
 workerReducer,
}) => (
  <DraggableCardsList
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