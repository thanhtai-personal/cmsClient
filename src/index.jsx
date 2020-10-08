import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import AppRoute from './appRoute'
import StoreSingleton from './storeSingleton'
import * as serviceWorker from './serviceWorker'
import './App.css'

const store = StoreSingleton.getInstance().store
const history = StoreSingleton.getInstance().history
const NODE_MOUNT = document.getElementById('root')

const renderApp = () =>
  render(
    <StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoute />
        </ConnectedRouter>
      </Provider>
    </StrictMode>,
    NODE_MOUNT
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./appRoute', renderApp)
}

renderApp()
serviceWorker.unregister();
