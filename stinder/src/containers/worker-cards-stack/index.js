import { compose } from 'recompose';
import { connect } from 'react-redux';
import WorkerCardList from './worker-cards-stack';

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
)(WorkerCardList);