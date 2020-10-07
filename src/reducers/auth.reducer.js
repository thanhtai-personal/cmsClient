
import {
  LOGIN,
  REGISTER,
  GETAUTH,
  UPDATEINPUT,
  makeSagasActionType,
  FORM_LOGIN,
  FORM_REGISTER,
  UPDATE_VALIDATE_DATA,
  GOOGLE_LOGIN
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
      if (forms.includes(payload?.form)) {
        return {
          ...state,
          [payload.form]: {
            ...state[payload.form],
            validatedData: {
              ...state[payload.form].validatedData,
              [payload.key]: payload.value
            }
          }
        }
      }
      return state
    case UPDATEINPUT:
      if (forms.includes(payload?.form)) {
        return {
          ...state,
          [payload.form]: {
            ...state[payload.form],
            data: {
              ...state[payload.form].data,
              [payload.key]: payload.value
            }
          }
        }
      }
      return state
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
      return state
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
    case GOOGLE_LOGIN:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: true
        }
      }
    case makeSagasActionType(GOOGLE_LOGIN).SUCCESS:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: false
        }
      }
    case makeSagasActionType(GOOGLE_LOGIN).FAILED:
      return {
        ...state,
        [FORM_LOGIN]: {
          ...state[FORM_LOGIN],
          loading: false
        }
      }
    default:
      return state
  }
}

export default authReducer