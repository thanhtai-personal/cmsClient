import apiService from 'root/apis'
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from 'root/actionTypes'

function* login(data) {
  try {
    const dataResponse = yield apiService.auth?.login(data.data).then(response => response)
    window.localStorage.setItem('jwtToken', dataResponse)
    yield put({ type: actionType.UPDATE_USER_DATA.PENDING, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.LOGIN.FAILED, payload: { error: error } })
  } 
}

function* register(data) {
  try {
    const dataResponse = yield apiService.auth?.register(data.data).then(response => response)
    window.localStorage.setItem('jwtToken', dataResponse?.token)
    yield put({ type: actionType.UPDATE_REGISTER_DATA.PENDING, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.REGISTER.FAILED, payload: { error: error } })
  } 
}


function* updateUserData(data) {
  try {
    yield put({ type: actionType.UPDATE_USER_DATA.SUCCESS, payload: data });
  } catch(error) {
    yield put({ type: actionType.UPDATE_USER_DATA.FAILED, payload: { error: error } })
  }
}


function* authActionWatcher() {
  yield all([
    yield takeLatest(actionType.LOGIN.PENDING, login),
    yield takeLatest(actionType.REGISTER.PENDING, register),
    yield takeLatest(actionType.UPDATE_USER_DATA.PENDING, updateUserData)
  ])
}

export default authActionWatcher