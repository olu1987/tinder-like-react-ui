import React from 'react';
import PropTypes from 'prop-types';

const DraggableCards = ({
  items,
}) => (
  <div>
    { JSON.stringify(items) }
  </div>
);

DraggableCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

DraggableCards.defaultProps = {
  items: [],
};

export default DraggableCards;