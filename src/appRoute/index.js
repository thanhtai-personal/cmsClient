import React from 'react'
import { Route, Switch } from 'react-router'
import createAppRoute from './manager'
import adminRoute from './admin'

export const appRouteManagerInstant = (function () {
  var instance;

  function createInstance() {
      let manager = createAppRoute()
      return manager;
  }

  return {
      getInstance: function () {
          if (!instance) {
            instance = createInstance();
          }
          return instance;
      }
  };
})();


function AppRoute() {
  const appRoutes = appRouteManagerInstant.getInstance()
  appRoutes.add('admin', adminRoute)
  return (
    <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          {appRoutes.reduce()}
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
  );
}

export default AppRoute
