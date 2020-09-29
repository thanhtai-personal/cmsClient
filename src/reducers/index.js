import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import authReducer from './auth.reducer'
import registerReducer from './register.reducer'
import vietMapReducer from './vietMap.reducer'
import historicalMapsReducer from './historicalMaps.reducer'
import cvReducer from './cv.reducer'

const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
  register: registerReducer,
  vietMap: vietMapReducer,
  historicalMaps: historicalMapsReducer,
  cv: cvReducer
})

export default rootReducer