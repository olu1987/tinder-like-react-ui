import React from 'react';
import PropTypes from 'prop-types';

import DraggableCard from '../draggable-card';
import './draggable-cards-stack.css';

const DraggableCardsList = ({
  items,
  onDragStart,
  onDragStop,
}) => (
  <div className="draggable-cards-stack">
    { items.map(item => (
      <DraggableCard
        key={item.id}
        name={item.name}
        imageSrc={item.image_src}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
      />
    )) }
  </div>
);

DraggableCardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  onDragStart: PropTypes.func,
  onDragStop: PropTypes.func,
};

DraggableCardsList.defaultProps = {
  items: [],
  onDragStart: () => {},
  onDragStop: () => {},
};

export default DraggableCardsList;