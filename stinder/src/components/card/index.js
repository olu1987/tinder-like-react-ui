import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name }) => (
  <div>
    {name}
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
};

Card.defaultProps = {
  name: '',
};

export default Card;
