

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
  GOOGLE_LOGIN,
  makeSagasActionType
} from 'root/actionTypes'
import { authApiNames } from './../apis'
import apiManager from 'root/apis'

const APIManager = apiManager()

function* login(action = {}) {
  try {
    const loginResult = yield APIManager.call(authApiNames.login, action.payload).then(response => response)
    window.localStorage.setItem('tttgalaxy--token', loginResult?.data?.token)
    yield put({ type: makeSagasActionType(LOGIN).SUCCESS, payload: loginResult?.data?.token })
  } catch (error) {
    yield put({ type: makeSagasActionType(LOGIN).FAILED, payload: error });
  }
}

function* register (action = {}) {
  try {
    const registerResult = yield APIManager.call(authApiNames.register, action.payload).then(response => response)
    yield put({ type: makeSagasActionType(REGISTER).SUCCESS, payload: registerResult?.data?.token })
  } catch (error) {
    yield put({ type: makeSagasActionType(REGISTER).FAILED, payload: error });
  }
}

function* googleLogin (action = {}) {
  try {
    const result = yield APIManager.call(authApiNames.googleLogin, action.payload).then(response => response)
    window.localStorage.setItem('tttgalaxy--token', result?.data?.token)
    yield put({ type: makeSagasActionType(GOOGLE_LOGIN).SUCCESS, payload: result?.data?.token })
  } catch (error) {
    yield put({ type: makeSagasActionType(GOOGLE_LOGIN).FAILED, payload: error });
  }
}

function* getAuth(action = {}) {
  try {
    const result = yield APIManager.call(authApiNames.getAuthData, action.payload).then(response => response)
    yield put({ type: makeSagasActionType(GETAUTH).SUCCESS, payload: result?.data })
  } catch (error) {
    yield put({ type: makeSagasActionType(GETAUTH).FAILED, payload: error });
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(REGISTER, register),
    takeLatest(LOGIN, login),
    takeLatest(GETAUTH, getAuth),
    takeLatest(GOOGLE_LOGIN, googleLogin)
  ])
}
