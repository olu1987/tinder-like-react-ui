import { combineReducers } from 'redux';
import workerReducer from './workerReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  workerReducer,
  movieReducer,
});
