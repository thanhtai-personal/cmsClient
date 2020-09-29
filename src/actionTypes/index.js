import { createAsyncTypes } from 'root/constants/utilities'
import authenActionTypes from './auth'
import vietMap from './vietMap'
import historicalMaps from './historicalMaps'
const actionType = {
  ...authenActionTypes,
  ...vietMap,
  ...historicalMaps
}

Object.keys(actionType).forEach((key) => {
  actionType[key] = createAsyncTypes(actionType[key])
})

export default actionType