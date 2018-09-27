import React from 'react';
import PropTypes from 'prop-types';

import './success.css';

const SuccessNotification = ({ label, className }) => (
  <div className={`success-notification ${className}`}>
    {label}
    <i className="fa fa-check" />
  </div>
);

SuccessNotification.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

SuccessNotification.defaultProps = {
  label: '',
  className: '',
};

export default SuccessNotification;
