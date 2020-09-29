import { all, call, spawn } from 'redux-saga/effects'

import authSagas from 'root/features/auth/sagas'

const staticSagas = {
  auth: authSagas,
}

function* combineSagas(_sagas = []) {
  let sagas = []
  Object.keys(_sagas).forEach((key) => {
    sagas.push(_sagas[key])
  })
  yield all(sagas.map(saga =>
    spawn(function* () {
      let successCalledSagas = true
      while (successCalledSagas) {
        try {
          yield call(saga)
          break
        } catch (e) {
          successCalledSagas = false
          console.log(e)
        }
      }
    }))
  );
}

function createSagasManager() {
  // Create an object which maps keys to reducers
  let sagas = staticSagas

  // Create the initial combinedReducer
  let combinedSagas = combineSagas(sagas)

  return {
    getSagasMap: () => sagas,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: () => {
      return combinedSagas
    },

    // Adds a new reducer with the specified key
    add: (key, saga) => {
      if (!key || sagas[key]) {
        return
      }

      // Add the reducer to the reducer mapping
      sagas[key] = saga

      // Generate a new combined reducer
      combinedSagas = combineSagas(sagas)
    },

    // Removes a reducer with the specified key
    remove: key => {
      if (!key || !sagas[key]) {
        return
      }

      // Remove it from the reducer mapping
      delete sagas[key]

      // Generate a new combined reducer
      combinedSagas = combineSagas(sagas)
    }
  }
}

export default createSagasManager