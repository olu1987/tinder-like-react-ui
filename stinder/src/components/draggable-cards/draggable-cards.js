import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

const DraggableCards = ({
  items,
}) => (
  <div>
    { items.map(item => (
      <Card
        key={item.id}
        name={item.name}
        imageSrc={item.image_src}
      />)) }
  </div>
);

DraggableCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

DraggableCards.defaultProps = {
  items: [],
};

export default DraggableCards;