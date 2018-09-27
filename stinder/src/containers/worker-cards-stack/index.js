import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkerCardList from './worker-cards-stack';

import { likeWorker, dislikeWorker, setActiveResource } from '../../actions/user';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ likeWorker, dislikeWorker, setActiveResource }, dispatch);
}

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    onWorkerSelect: props => (resource) => {
      const nextWorkerIndex = props.workerReducer.workers.indexOf(resource) - 1;
      props.setActiveResource(props.workerReducer.workers[nextWorkerIndex]);
    },
  }),
  withHandlers({
    onSwipeRight: ({ onWorkerSelect, likeWorker }) => (worker) => {
      likeWorker(worker);
      onWorkerSelect(worker);
    },
    onSwipeLeft: ({ onWorkerSelect, dislikeWorker }) => (worker) => {
      dislikeWorker(worker);
      onWorkerSelect(worker);
    },
  }),
  lifecycle({
    componentDidMount() {
      const defaultActiveWorker = this.props.workerReducer.workers[this.props.workerReducer.workers.length - 1];
      this.props.setActiveResource(defaultActiveWorker);
    },
  }),
)(WorkerCardList);
