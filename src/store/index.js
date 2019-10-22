import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {  rootReducer, registerReducer }  from './registerUsers/reducer';

const loggerMiddleware = createLogger();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];

  middlewares.push(loggerMiddleware);

const store = createStore(
  rootReducer,
  {
    registerReducer: {
      data: [],
      success: false
    }
  },
  storeEnhancers(applyMiddleware(...middlewares))
);

export default store;
