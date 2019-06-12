import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

const middlewares = [thunk];

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.REACT_APP_REDUX_LOGGER === 'true'
) {
  middlewares.push(require('redux-logger').logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;
