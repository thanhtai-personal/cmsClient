import {
  FORM_REGISTER,
  FORM_LOGIN
} from '../../actionTypes'
// import validatesCommon from './validates.json'

const validateUserName = (value) => {
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
      userName: validateUserName,
      password: validatePassword
    },
    [FORM_LOGIN]: {
      userName: validateUserName,
      password: validatePassword
    }
  }
}

export default validates