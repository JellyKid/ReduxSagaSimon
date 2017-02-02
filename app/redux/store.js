import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import reducer from './reducer';
import sagas from '../saga/saga';
import sagaMonitor from '../saga/sagaMonitor';

const logger = createLogger();
const saga = createSagaMiddleware({sagaMonitor: sagaMonitor});

const store = createStore(
  reducer,
  applyMiddleware(saga),
  applyMiddleware(logger)
);

saga.run(sagas);

export default store;
