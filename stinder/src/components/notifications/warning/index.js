import React from 'react';
import PropTypes from 'prop-types';

import './warning.css';

const WarningNotification = ({ label, className }) => (
  <div className={`warning-notification ${className}`}>
    {label}
    <i className="fa fa-times" />
  </div>
);

WarningNotification.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

WarningNotification.defaultProps = {
  label: '',
  className: '',
};

export default WarningNotification;
