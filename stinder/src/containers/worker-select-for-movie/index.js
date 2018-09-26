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
  withPropsOnChange((props, nextProps) => props.userReducer.likedWorkers.length
  !== nextProps.userReducer.likedWorkers.length, ({ setWorkerLiked, userReducer, setNotification }) => {
    if (userReducer.likedWorkers.length) {
      setWorkerLiked(userReducer.likedWorkers[userReducer.likedWorkers.length - 1]);
      setNotification(notificationTypes.SUCCESS);
      setTimeout(() => setNotification(''), 3000);
    }
  }),
  withPropsOnChange((props, nextProps) => props.userReducer.dislikedWorkers.length
  !== nextProps.userReducer.dislikedWorkers.length, ({ setWorkerDisliked, userReducer, setNotification }) => {
    if (userReducer.dislikedWorkers.length) {
      setWorkerDisliked(userReducer.dislikedWorkers[userReducer.dislikedWorkers.length - 1]);
      setNotification(notificationTypes.WARNING);
      setTimeout(() => setNotification(''), 3000);
    }
  }),
)(WorkerSelectForMovie);
