import React from 'react';
import PropTypes from 'prop-types';

import './button-styles.css';

const YesButton = ({ onClick }) => (
  <button className="yes-button" type="button" onClick={onClick}>
    <i className="fa fa-check-circle" />
  </button>
);

YesButton.propTypes = {
  onClick: PropTypes.func,
};

YesButton.defaultProps = {
  onClick: () => {},
};

export default YesButton;