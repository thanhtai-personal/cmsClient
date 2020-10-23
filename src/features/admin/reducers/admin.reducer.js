
import {
  FORM_ADD_PRODUCT,
  UPDATEINPUT,
  UPDATE_VALIDATE_DATA
} from 'root/actionTypes'

const forms = [
  FORM_ADD_PRODUCT,
]

const initalState = {
  [FORM_ADD_PRODUCT]: {
    loading: false,
    data: {
      title: '',
      summary: ''
    },
    validatedData: {
      title: {
        isValidated: false,
        message: ''
      },
      firstUpdated: false
    }
  }
}

const adminReducer = (state = initalState, { type, payload }) => {
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
    default:
      return state
  }
}

export default adminReducer