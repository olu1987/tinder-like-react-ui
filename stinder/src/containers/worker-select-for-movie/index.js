import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import WorkerSelectForMovie from './worker-select-for-movie';

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withState('selectedMovie', 'setSelectedMovie', ({ movieReducer }) => movieReducer.movies[0]),
)(WorkerSelectForMovie);
