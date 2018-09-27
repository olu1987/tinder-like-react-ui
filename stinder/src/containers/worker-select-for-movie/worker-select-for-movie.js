import React from 'react';
import PropTypes from 'prop-types';

import YesButton from '../../components/action-buttons/yes-button';
import NoButton from '../../components/action-buttons/no-button';
import WorkerCardStack from '../worker-cards-stack';
import SuccessNotification from '../../components/notifications/success';
import WarningNotification from '../../components/notifications/warning';
import notificationTypes from '../../components/notifications/constants/notification-types';

import './worker-select-for-movie.css';

const WorkerSelectForMovie = ({
  selectedMovie,
  workerLiked,
  workerDisliked,
  notification,
  onNoButtonClick,
  onYesButtonClick,
}) => <div className="worker-select-for-movie">
  <SuccessNotification
    label={`You just liked ${workerLiked.name}`}
    className={notification === notificationTypes.SUCCESS ? 'active' : ''}
    /> 
  <WarningNotification
    label={`You just disliked ${workerDisliked.name}`}
    className={notification === notificationTypes.WARNING ? 'active' : ''}
    /> 
  <img className="movie-logo" alt={selectedMovie.name} src={selectedMovie.image_src} />
  <h1>Position: Stunt Double</h1>
  <WorkerCardStack />
  <div className="actions">
    <NoButton onClick={onNoButtonClick} />
    <YesButton onClick={onYesButtonClick} />
  </div>
</div>;

WorkerSelectForMovie.propTypes = {
  selectedMovie: PropTypes.objectOf(PropTypes.any),
  workerLiked: PropTypes.objectOf(PropTypes.any),
  workerDisliked: PropTypes.objectOf(PropTypes.any),
  notification: PropTypes.string,
  onNoButtonClick: PropTypes.func,
  onYesButtonClick: PropTypes.func,
};

WorkerSelectForMovie.defaultProps = {
  selectedMovie: {},
  workerLiked: {},
  workerDisliked: {},
  notification: '',
  onNoButtonClick: () => {},
  onYesButtonClick: () => {},
};

export default WorkerSelectForMovie;
