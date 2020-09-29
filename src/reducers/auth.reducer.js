
import {
  LOGIN,
  REGISTER,
  GETAUTH,
  UPDATEINPUT,
  makeSagasActionType,
  FORM_LOGIN,
  FORM_REGISTER
} from 'root/actionTypes'

const forms = [
  FORM_LOGIN, FORM_REGISTER
]

const initalState = {
  [FORM_LOGIN]: {
    loading: false,
    inputData: {

    }
  },
  [FORM_REGISTER]: {
    loading: false,
    inputData: {
      firstName: '',
      middleName: '',
      lastName: '',
      userName: '',
      password: '',
    }
  },
  auth: {}
}

const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATEINPUT:
      let newState = { ...state }
      if (forms.includes(payload?.form)) {
        newState[payload.form].inputData[payload.key] = payload.value
      }
      return newState
    case LOGIN:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: true
        }
      }
    case makeSagasActionType(LOGIN).SUCCESS:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: false
        }
      }
    case makeSagasActionType(LOGIN).FAILED:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: false
        }
      }
    case REGISTER:
      return {
        ...state,
        [FORM_REGISTER]: {
          ...state[FORM_REGISTER],
          loading: true
        }
      }
    case makeSagasActionType(REGISTER).SUCCESS:
    case makeSagasActionType(REGISTER).FAILED:
      return {
        ...state,
        [FORM_REGISTER]: {
          ...state[FORM_REGISTER],
          loading: false
        }
      }
    case GETAUTH:
    case makeSagasActionType(GETAUTH).FAILED:
      return {
        ...state,
        ...payload
      }
    case makeSagasActionType(GETAUTH).SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          ...payload?.data
        }
      }
    default:
      return state
  }
}

export default authReducer