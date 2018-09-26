import React from 'react';
import PropTypes from 'prop-types';

import DraggableCard from '../draggable-card';
import './draggable-cards-stack.css';

const DraggableCardsList = ({
  items,
  onSwipeRight,
  onSwipeLeft,
}) => (
  <div className="draggable-cards-stack">
    <div className="card placeholder">
      <h2>No more stuntmen</h2>
    </div>
    { items.map(item => (
      <DraggableCard
        key={item.id}
        id={item.id}
        name={item.name}
        imageSrc={item.image_src}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
        item={item}
      />
    )) }
  </div>
);

DraggableCardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func,
};

DraggableCardsList.defaultProps = {
  items: [],
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

export default DraggableCardsList;