import authRoutes from './auth'
import mapRoutes from './map'
import historicalMapsRoutes from './historicalMaps'
import cvRoutes from './cv'
export default {
  home: '/home',
  ...authRoutes,
  ...mapRoutes,
  ...historicalMapsRoutes,
  ...cvRoutes
}