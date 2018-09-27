import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkerSelectForMovie from './worker-select-for-movie';
import notificationTypes from '../../components/notifications/constants/notification-types';

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
  withState('selectedMovie', 'setSelectedMovie', ({ movieReducer }) => movieReducer.movies[0]),
  withState('workerLiked', 'setWorkerLiked', ''),
  withState('workerDisliked', 'setWorkerDisliked', ''),
  withState('notification', 'setNotification', ''),
  withState('timeoutId', 'setTimeoutId', ''),
  withHandlers({
    onWorkerSelect: props => (resource) => {
      const nextWorkerIndex = props.workerReducer.workers.indexOf(resource) - 1;
      props.setActiveResource(props.workerReducer.workers[nextWorkerIndex]);
    },
  }),
  withHandlers({
    onYesButtonClick: ({ userReducer, likeWorker, onWorkerSelect }) => () => {
      likeWorker(userReducer.activeResource);
      onWorkerSelect(userReducer.activeResource);
    },
    onNoButtonClick: ({ userReducer, dislikeWorker, onWorkerSelect }) => () => {
      dislikeWorker(userReducer.activeResource);
      onWorkerSelect(userReducer.activeResource);
    },
  }),
  withPropsOnChange((props, nextProps) => props.userReducer.likedWorkers.length
  !== nextProps.userReducer.likedWorkers.length, ({
    setWorkerLiked, userReducer, setNotification, setTimeoutId, timeoutId,
  }) => {
    if (userReducer.likedWorkers.length) {
      setWorkerLiked(userReducer.likedWorkers[userReducer.likedWorkers.length - 1]);
      setNotification(notificationTypes.SUCCESS);
      clearTimeout(timeoutId);
      const id = setTimeout(() => setNotification(''), 3000);
      setTimeoutId(id);
    }
  }),
  withPropsOnChange((props, nextProps) => props.userReducer.dislikedWorkers.length
  !== nextProps.userReducer.dislikedWorkers.length, ({
    setWorkerDisliked, userReducer, setNotification, setTimeoutId, timeoutId,
  }) => {
    if (userReducer.dislikedWorkers.length) {
      setWorkerDisliked(userReducer.dislikedWorkers[userReducer.dislikedWorkers.length - 1]);
      setNotification(notificationTypes.WARNING);
      clearTimeout(timeoutId);
      const id = setTimeout(() => setNotification(''), 3000);
      setTimeoutId(id);
    }
  }),
)(WorkerSelectForMovie);
