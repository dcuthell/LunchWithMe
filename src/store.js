import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import getRootReducer from 'reducers/index';
import sagas from 'sagas/index';

//Push Middlewares
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//ApplyMiddlewares
const enhancer = compose(
  applyMiddleware(...middlewares),
);

export default function getStore(navReducer) {
  //Create store
  const store = createStore(
    getRootReducer(navReducer),
    {},                           // initial state
    enhancer,
  );
  //Run sagas
  sagaMiddleware.run(sagas);

  return store;
}
