import React from 'react';
import PropTypes from 'prop-types';

import DraggableCard from '../draggable-card';
import './draggable-cards-list.css';

const DraggableCardsList = ({
  items,
  onDragStart,
  onDragStop,
}) => (
  <ul className="draggable-cards-list">
    <li className="placeholder">
      <div>No Results</div>
    </li>
    { items.map(item => (
      <li key={item.id}>
        <DraggableCard
          name={item.name}
          imageSrc={item.image_src}
          onDragStart={onDragStart}
          onDragStop={onDragStop}
        />
      </li>)) }
      
  </ul>
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