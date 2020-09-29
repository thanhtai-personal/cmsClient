

import { 
  //put
  takeLatest
  , all,
  put
} from 'redux-saga/effects'

import {
  REGISTER,
  LOGIN,
  GETAUTH,
  makeSagasActionType
} from 'root/actionTypes'
import { authApiNames } from './../apis'
import apiManager from 'root/apis'

const APIManager = apiManager()

function* login(action = {}) {
  try {
    const loginResult = yield APIManager.call(authApiNames.login, action.payload).then(response => response)
    console.log('fadsf', loginResult?.code, loginResult?.code === 200)
    yield put({ type: makeSagasActionType(LOGIN).SUCCESS, payload: loginResult?.data })
  } catch (error) {
    yield put({ type: makeSagasActionType(LOGIN).FAILED, payload: error });
  }
}

function* register (action = {}) {
  try {
    const registerResult = yield APIManager.call(authApiNames.register, action.payload).then(response => response)
    yield put({ type: makeSagasActionType(REGISTER).SUCCESS, payload: registerResult?.data })
  } catch (error) {
    yield put({ type: makeSagasActionType(REGISTER).FAILED, payload: error });
  }
}

function* getAuth(action = {}) {
  // const authResult = yield APIManager.call(authApiNames.getAuthData, action.payload).then(response => response)
}

export default function* authWatcher() {
  yield all([
    takeLatest(REGISTER, register),
    takeLatest(LOGIN, login),
    takeLatest(GETAUTH, getAuth)
  ])
}
