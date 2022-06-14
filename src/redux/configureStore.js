import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragons from './dragons/dragons';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  rockets,
  dragons,
  // missions,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
