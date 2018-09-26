import React from 'react';
import PropTypes from 'prop-types';

import './success.css';

const SuccessNotification = ({ label, className }) => (
  <div className={`success-notification ${className}`}>
    {label}
  </div>
);

SuccessNotification.propTypes = {
  label: PropTypes.string,
};

SuccessNotification.defaultProps = {
  label: '',
};

export default SuccessNotification;