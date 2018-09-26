import React from 'react';
import PropTypes from 'prop-types';

import YesButton from '../../components/action-buttons/yes-button';
import NoButton from '../../components/action-buttons/no-button';

import WorkerCardList from '../worker-card-list';
import './worker-select-for-movie.css';

const WorkerSelectForMovie = ({ selectedMovie }) => (
  <div className="worker-select-for-movie">
    <img className="movie-logo" alt={selectedMovie.name} src={selectedMovie.image_src} />
    <h2>Position: Stunt Double</h2>
    <WorkerCardList />
    <div className="actions">
      <YesButton />
      <NoButton />
    </div>
  </div>
);

WorkerSelectForMovie.propTypes = {
  selectedMovie: PropTypes.objectOf(PropTypes.any),
};

WorkerSelectForMovie.defaultProps = {
  selectedMovie: {},
};

export default WorkerSelectForMovie;