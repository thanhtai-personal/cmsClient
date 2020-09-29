import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { requireAuth, useLayout, useLocalization, makeSuspenseComponent, useMultiThemes } from 'root/customMiddleware'
import appRoutesPath from 'root/appRoutes'
import HeaderComponent from 'root/components/layouts/header'
import CVHeader from 'root/components/layouts/cvHeader'

// load containers with react lazy to split code.
const HomeContainer = React.lazy(() => import('root/containers/home'))
const LoginContainer = React.lazy(() => import('root/containers/login'))
const RegisterContainer = React.lazy(() => import('root/containers/register'))
const VietMapContainer = React.lazy(() => import('root/containers/vietmap'))
const HistoricalMapsContainer = React.lazy(() => import('root/containers/historicalMaps'))
const AboutMeContainer = React.lazy(() => import('root/containers/cv'))
const AddCelebrityContainer = React.lazy(() => import('root/containers/historicalMaps/addCelebrity'))

const publicRoute = [
  {
    path: appRoutesPath.home,
    component: makeSuspenseComponent(HomeContainer),
    isExact: false,
    layout: { header: HeaderComponent }
  },
  {
    path: appRoutesPath.login,
    component: makeSuspenseComponent(LoginContainer),
    isExact: false,
    layout: {}
  },
  {
    path: appRoutesPath.register,
    component: makeSuspenseComponent(RegisterContainer),
    isExact: false,
    layout: {}
  },
  {
    path: appRoutesPath.vietmap,
    component: makeSuspenseComponent(VietMapContainer),
    isExact: false,
    layout: {}
  },
  {
    path: appRoutesPath.historicalMaps,
    component: makeSuspenseComponent(HistoricalMapsContainer),
    isExact: false,
    layout: { header: HeaderComponent }
  },
  {
    path: appRoutesPath.cv,
    component: makeSuspenseComponent(AboutMeContainer),
    isExact: false,
    layout: { header: CVHeader }
  },
  {
    path: appRoutesPath.createCelebrity,
    component: makeSuspenseComponent(AddCelebrityContainer),
    isExact: false,
    layout: { header: HeaderComponent }
  }
]

const privateRoute = [
  {
    path: appRoutesPath.createCelebrity,
    component: () => <div>test</div>,
    isExact: false,
    layout: { header: HeaderComponent } //{ header: Header, footer: Footer }
  }
]

const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={useMultiThemes(useLocalization(route.layout ? useLayout(route.layout, route.component) : route.component))} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={useMultiThemes(useLocalization(requireAuth(route.layout ? useLayout(route.layout, route.component) : route.component)))} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={useMultiThemes(useLocalization(useLayout({ header: CVHeader }, (makeSuspenseComponent(AboutMeContainer)))))} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes