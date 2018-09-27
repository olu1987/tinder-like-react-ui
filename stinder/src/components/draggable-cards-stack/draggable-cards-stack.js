import React from 'react';
import PropTypes from 'prop-types';

import DraggableCard from '../draggable-card';
import './draggable-cards-stack.css';

const DraggableCardsStack = ({
  items,
  onSwipeRight,
  onSwipeLeft,
  itemToSlideRight,
  itemToSlideLeft,
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
        forceSlideRight={itemToSlideRight === item}
        forceSlideLeft={itemToSlideLeft === item}
        item={item}
      />
    )) }
  </div>
);

DraggableCardsStack.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func,
  itemToSlideRight: PropTypes.objectOf(PropTypes.any),
  itemToSlideLeft: PropTypes.objectOf(PropTypes.any),
};

DraggableCardsStack.defaultProps = {
  items: [],
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
  itemToSlideRight: {},
  itemToSlideLeft: {},
};

export default DraggableCardsStack;
