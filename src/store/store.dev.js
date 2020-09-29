import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import sagaMonitor from '@redux-saga/simple-saga-monitor'
import rootReducer from 'root/reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger)
    ),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('root/reducers', () => {
      const nextRootReducer = require('root/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}