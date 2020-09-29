import {
  FORM_REGISTER,
  FORM_LOGIN
} from '../../actionTypes'
// import validatesCommon from './validates.json'

const validateEmail = (value) => {
  let validateObj = {
    isValidated: true,
  }
  if (!value) {
    validateObj = {
      isValidated: false,
      message: 'empty user name'
    }
  }
  return validateObj
}

const validatePassword = (value) => {
  let validateObj = {
    isValidated: true,
  }
  if (!value) {
    validateObj = {
      isValidated: false,
      message: 'empty password'
    }
  }
  return validateObj
}

const validates = {
  auth: {
    [FORM_REGISTER]: {
      email: validateEmail,
      password: validatePassword
    },
    [FORM_LOGIN]: {
      email: validateEmail,
      password: validatePassword
    }
  }
}

export default validates