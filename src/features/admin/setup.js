import StoreSingleton from 'root/storeSingleton'
import adminMenuReducer from './reducers/menu.reducer'
import adminContentReducer from './reducers/content.reducer'
import adminSagas from './sagas'
import apiManagerSingleton from 'root/apis/apiManagerSingleton'
import adminApi from './apis'

const store = StoreSingleton.getInstance().store

const setupAdmin = () => {
  const state = store.getState()
  if (!state?.adminMenu) {
    store.reducerManager.add('adminMenu', adminMenuReducer)
    store.reducerManager.add('adminContent', adminContentReducer)
    store.sagasManager.add('adminSagas', adminSagas)
    apiManagerSingleton.getInstance().add('adminApis', adminApi)

    apiManagerSingleton.getInstance().reduce()
    store.updateReducer()
    store.updateSagas()
  }
}

export default setupAdmin