import React from 'react';
import PropTypes from 'prop-types';

import DraggableCard from '../draggable-card';
import './draggable-cards-list.css';

const DraggableCardsList = ({
  items,
}) => (
  <ul className="draggable-cards-list">
    { items.map(item => (
      <li key={item.id}>
        <DraggableCard
          name={item.name}
          imageSrc={item.image_src}
        />
      </li>)) }
  </ul>
);

DraggableCardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

DraggableCardsList.defaultProps = {
  items: [],
};

export default DraggableCardsList;