import { all } from 'redux-saga/effects'
import authSagas from './auth'
import vietMapSagas from './vietMap'
// import historicalMapsSagas from './historicalMaps'


export default function* rootSaga() {
  const listSagas = [
    authSagas,
    vietMapSagas,
    // historicalMapsSagas
  ]
  yield all(listSagas.map((saga) => saga()))
}