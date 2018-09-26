import { compose, withState, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import WorkerCardList from './worker-card-list';

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
)(WorkerCardList);