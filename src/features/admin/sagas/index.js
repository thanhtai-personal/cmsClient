

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
import { adminMenuApiNames } from '../apis/menu'
import apiManager from 'root/apis'
const APIManager = apiManager()

function* getDetailDataByMenuKey(action = {}) {
  try {
    const apiName = `get${action.payload.key}`
    const result = yield APIManager.call(adminMenuApiNames[apiName], action.payload).then(response => response)
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
