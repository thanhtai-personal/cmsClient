
import {
  LOGIN,
  REGISTER,
  GETAUTH,
  UPDATEINPUT,
  makeSagasActionType,
  FORM_LOGIN,
  FORM_REGISTER,
  UPDATE_VALIDATE_DATA
} from 'root/actionTypes'

const forms = [
  FORM_LOGIN, FORM_REGISTER,
]

const initalState = {
  [FORM_LOGIN]: {
    loading: false,
    data: {
      email: '',
      password: ''
    },
    validatedData: {
      email: {
        isValidated: false,
        message: ''
      },
      password: {
        isValidated: false,
        message: ''
      },
      firstUpdated: false
    }
  },
  [FORM_REGISTER]: {
    loading: false,
    data: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validatedData: {
      email: {
        isValidated: false,
        message: ''
      },
      password: {
        isValidated: false,
        message: ''
      },
      firstUpdated: false,
      isFormValidated: false
    }
  },
  auth: {}
}

const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_VALIDATE_DATA:
      let newStateForValidate = { ...state }
      if (forms.includes(payload?.form)) {
        newStateForValidate[payload.form].validatedData[payload.key] = payload.value
      }
      return newStateForValidate
    case UPDATEINPUT:
      let newState = { ...state }
      if (forms.includes(payload?.form)) {
        newState[payload.form].data[payload.key] = payload.value
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