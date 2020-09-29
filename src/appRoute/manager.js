import React from 'react'
import { Route } from 'react-router'

import useMultiThemes from 'root/middlewares/themesProvider'
import authRoutePath from './auth'


const combineRoute = (appRoutes) => {
  let routesList = []
  Object.keys(appRoutes).forEach((key) => {
    if(Array.isArray(appRoutes[key])) {
      routesList = routesList.concat(appRoutes[key])
    }
  })
  return routesList.map((route = {}) => {
    //update option later
    let resultComponent = route.component
    if (route.isMultitheme) {
      resultComponent = useMultiThemes(resultComponent)
    }
    return <Route key={route.key} path={route.path} exact={route.isExact} component={resultComponent} />
  })
}

function createAppRoute() {
  // Create an object which maps keys to reducers
  const appRoutes = {
    auth: authRoutePath,
  }
  // Create the initial combinedReducer
  let combinedAppRoute = combineRoute(appRoutes)

  return {
    getAppRouteMap: () => appRoutes,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: () => {
      return combinedAppRoute
    },

    // Adds a new reducer with the specified key
    add: (key, featureRoute) => {
      if (!key || appRoutes[key]) {
        return
      }

      // Add the reducer to the reducer mapping
      appRoutes[key] = featureRoute

      // Generate a new combined reducer
      combinedAppRoute = combineRoute(appRoutes)
    },

    // Removes a reducer with the specified key
    remove: key => {
      if (!key || !appRoutes[key]) {
        return
      }

      // Remove it from the reducer mapping
      delete appRoutes[key]

      // Generate a new combined reducer
      combinedAppRoute = combineRoute(appRoutes)
    }
  }
}

export default createAppRoute