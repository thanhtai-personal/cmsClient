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