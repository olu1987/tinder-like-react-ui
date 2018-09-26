import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import rootReducer from './reducers/rootReducer';


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f)
  );
}
