import { combineReducers } from 'redux';
import workerReducer from './workerReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

export default combineReducers({
  workerReducer,
  movieReducer,
  userReducer,
});
