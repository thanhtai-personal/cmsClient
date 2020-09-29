import devStore from './store.dev'
import prdStore from './store.prod'

let store = devStore

if (process.env.NODE_ENV === 'production') {
  store = prdStore
}

export default store