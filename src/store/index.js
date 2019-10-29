import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./registerUsers/reducer";
import rootSaga  from '../sagas/userRegisterSaga';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    registerReducer: {
      data: [],
      success: false,
      error: ''
    }
  },
  storeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
