import React from 'react';
import PropTypes from 'prop-types';

import './button-styles.css';

const NoButton = ({ onClick }) => (
  <button className="no-button" type="button" onClick={onClick}>
    <i className="fa fa-times-circle" />
  </button>
);

NoButton.propTypes = {
  onClick: PropTypes.func,
};

NoButton.defaultProps = {
  onClick: () => {},
};

export default NoButton;
