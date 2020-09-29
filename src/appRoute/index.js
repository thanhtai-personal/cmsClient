import React from 'react'
import { Route, Switch } from 'react-router'
import createAppRoute from './manager'

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
  return (
    <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          {appRoutes.reduce()}
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
  );
}

export default AppRoute
