// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
