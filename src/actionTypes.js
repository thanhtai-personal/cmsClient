// undoable
export const UNDO = 'UNDO'
export const REDO = 'REDO'

//update form
export const UPDATEINPUT = 'UPDATEINPUT'

// auth
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const GETAUTH = 'GETAUTH'

//actiontTypesUtil - for sagas
export const makeSagasActionType = (actionType) => {
  return {
    SUCCESS: `${actionType}_SUCCESS`,
    FAILED: `${actionType}_FAILED`,
  }
}

//form
export const FORM_REGISTER = 'FORM_REGISTER'
export const FORM_LOGIN = 'FORM_LOGIN'
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN'
export const FORM_ADD_PRODUCT = 'FORM_ADD_PRODUCT'

//feature
export const FEATURE_AUTH = 'auth'
export const FEATURE_ADMIN = 'admin'

//validate
export const UPDATE_VALIDATE_DATA = 'UPDATE_VALIDATE_DATA'

//admin menu
export const UPDATE_SECONDARY_MENU_SELECTED = 'UPDATE_SECONDARY_MENU_SELECTED'
export const UPDATE_MAIN_MENU_SELECTED = 'UPDATE_MAIN_MENU_SELECTED'

//admin content
export const UPDATE_PRODUCT_TABLE_CONFIG = 'UPDATE_PRODUCT_TABLE_CONFIG'