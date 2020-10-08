

import { 
  put,
  takeLatest,
  all,
} from 'redux-saga/effects'

import {
  UPDATE_SECONDARY_MENU_SELECTED,
  UPDATE_MAIN_MENU_SELECTED,
  makeSagasActionType
} from 'root/actionTypes'
import { adminApiNames } from '../apis'
import apiManagerSingleton from 'root/apis/apiManagerSingleton'
const APIManager = apiManagerSingleton.getInstance()

function* getDetailDataByMenuKey(action = {}) {
  try {
    const result = yield APIManager.call(adminApiNames[action.payload.key], action.payload).then(response => response)
    yield put({ type: makeSagasActionType(UPDATE_MAIN_MENU_SELECTED).SUCCESS, payload: result?.data })
  } catch (error) {
    yield put({ type: makeSagasActionType(UPDATE_MAIN_MENU_SELECTED).FAILED, payload: error });
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(UPDATE_MAIN_MENU_SELECTED, getDetailDataByMenuKey),
    takeLatest(UPDATE_SECONDARY_MENU_SELECTED, getDetailDataByMenuKey),
  ])
}
