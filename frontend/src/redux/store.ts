/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
import themeReducer from './reducers/themeReducer';
import authReducer from './reducers/authReducer';

const store = createStore(
  combineReducers({ rootReducer, themeReducer, authReducer }),
  composeWithDevTools()
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
