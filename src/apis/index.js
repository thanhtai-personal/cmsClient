import devConfig from './devConfig'
import prdConfig from './prodConfig'
import authApi from './auth'
import axios from 'axios'

let config = devConfig
if (process.env.NODE_ENV === 'production') {
  config = prdConfig
}
const apiInstant = axios.create(config)

const makeRequest = (apiConfig) => {
  return (data) => apiInstant[apiConfig.method || 'get'](apiConfig.url, data || null)
}

const makeApiService = (apiObject) => {
  let _apis = {}
  Object.keys(apiObject).forEach((key) => {
    _apis[key] = makeRequest(apiObject[key])
  })
  return _apis 
}
//yield apiSercive.auth.login(data)

export default {
  auth: makeApiService(authApi)
}