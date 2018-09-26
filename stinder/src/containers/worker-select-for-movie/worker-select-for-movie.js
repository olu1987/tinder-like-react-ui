import React from 'react';
import PropTypes from 'prop-types';

import YesButton from '../../components/action-buttons/yes-button';
import NoButton from '../../components/action-buttons/no-button';
import WorkerCardStack from '../worker-cards-stack';
import SuccessNotification from '../../components/notifications/success';
import notificationTypes from '../../components/notifications/constants/notification-types';

import './worker-select-for-movie.css';

const WorkerSelectForMovie = ({ selectedMovie, workerLiked, notification }) => {
  return (
    <div className="worker-select-for-movie">
      <SuccessNotification
        label={`You just liked ${workerLiked.name}`}
        className={notification === notificationTypes.SUCCESS ? 'active' : ''}
       /> 
      <img className="movie-logo" alt={selectedMovie.name} src={selectedMovie.image_src} />
      <h2>Position: Stunt Double</h2>
      <WorkerCardStack />
      <div className="actions">
        <NoButton />
        <YesButton />
      </div>
    </div>
  );
};

WorkerSelectForMovie.propTypes = {
  selectedMovie: PropTypes.objectOf(PropTypes.any),
};

WorkerSelectForMovie.defaultProps = {
  selectedMovie: {},
};

export default WorkerSelectForMovie;