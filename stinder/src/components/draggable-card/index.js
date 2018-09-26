import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './draggable-card.css';

const Card = ({ name, imageSrc }) => {
  const imageStyle = {
    backgroundImage: `url(${imageSrc})`,

  }
  return (
    <Draggable>
      <div className="card">
        <div className="image" style={imageStyle} />
        <h2>{name}</h2>
      </div>
    </Draggable>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  imageSrc: '',
};

export default Card;
