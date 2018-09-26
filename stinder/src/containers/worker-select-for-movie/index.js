import { compose, withState, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import WorkerSelectForMovie from './worker-select-for-movie';
import notificationTypes from '../../components/notifications/constants/notification-types';

const mapStateToProps = state => ({
  ...state,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withState('selectedMovie', 'setSelectedMovie', ({ movieReducer }) => movieReducer.movies[0]),
  withState('workerLiked', 'setWorkerLiked', ''),
  withState('workerDisliked', 'setWorkerDisliked', ''),
  withState('notification', 'setNotification', ''),
  withState('timeoutId', 'setTimeoutId', ''),
  withPropsOnChange((props, nextProps) => props.userReducer.likedWorkers.length
  !== nextProps.userReducer.likedWorkers.length, ({ setWorkerLiked, userReducer,
    setNotification, setTimeoutId, timeoutId,
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
  !== nextProps.userReducer.dislikedWorkers.length, ({ setWorkerDisliked, userReducer, 
    setNotification, setTimeoutId, timeoutId,
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
