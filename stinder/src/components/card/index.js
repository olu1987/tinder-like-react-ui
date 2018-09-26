import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({ name, imageSrc }) => {
  const imageStyle = {
    backgroundImage: `url(${imageSrc})`,

  }
  return (
    <div className="card">
      <div className="image" style={imageStyle} />
      <h2>{name}</h2>
    </div>
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
