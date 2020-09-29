import {
  FORM_REGISTER,
  FORM_LOGIN
} from '../../actionTypes'
// import validatesCommon from './validates.json'

const validateEmail = (value) => {
  let validateOnj = {
    isValidated: true,
  }
  if (!value) {
    validateOnj = {
      isValidated: false,
      errorMessage: 'empty user name'
    }
  }
  return validateOnj
}

const validatePassword = (value) => {
  let validateOnj = {
    isValidated: true,
  }
  if (!value) {
    validateOnj = {
      isValidated: false,
      errorMessage: 'empty password'
    }
  }
  return validateOnj
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