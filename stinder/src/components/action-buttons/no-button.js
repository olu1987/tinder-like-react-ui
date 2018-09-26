import React from 'react';
import PropTypes from 'prop-types';

const NoButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>
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
