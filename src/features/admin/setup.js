import StoreSingleton from 'root/storeSingleton'
import adminMenuReducer from './reducers/menu.reducer'
import adminContentReducer from './reducers/content.reducer'
import adminFormReducer from './reducers/admin.reducer'
import adminSagas from './sagas'
import apiManagerSingleton from 'root/apis/apiManagerSingleton'
import adminApi from './apis'
import {
  FEATURE_ADMIN
} from 'root/actionTypes'

const store = StoreSingleton.getInstance().store

export const reducerNames = {
  adminMenu: 'adminMenu',
  adminContent: 'adminContent',
  adminForm: FEATURE_ADMIN
}

const setupAdmin = () => {
  const state = store.getState()
  if (!state?.adminMenu) {
    store.reducerManager.add(reducerNames.adminMenu, adminMenuReducer)
    store.reducerManager.add(reducerNames.adminContent, adminContentReducer)
    store.reducerManager.add(reducerNames.adminForm, adminFormReducer)
    store.sagasManager.add(`${FEATURE_ADMIN}Sagas`, adminSagas)
    apiManagerSingleton.getInstance().add(`${FEATURE_ADMIN}Apis`, adminApi)

    apiManagerSingleton.getInstance().reduce()
    store.updateReducer()
    store.updateSagas()
  }
}

export default setupAdmin