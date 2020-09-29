import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import AppRoute from './appRoute'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()
const store = configureStore({}, history)
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
