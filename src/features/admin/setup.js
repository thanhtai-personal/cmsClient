import StoreSingleton from 'root/storeSingleton'
import adminMenuReducer from './reducers/menu.reducer'
import adminSagas from './sagas'

const store = StoreSingleton.getInstance().store

const setupAdmin = () => {
  const state = store.getState()
  if (!state?.adminMenu) {
    store.reducerManager.add('adminMenu', adminMenuReducer)
    store.sagasManager.add('adminSagas', adminSagas)
  
    store.updateReducer()
    store.updateSagas()
  }
}

export default setupAdmin