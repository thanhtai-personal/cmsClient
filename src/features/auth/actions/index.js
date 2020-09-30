import {
  LOGIN,
  REGISTER,
  UPDATEINPUT,
  GOOGLE_LOGIN
} from 'root/actionTypes'

export const updateInputData = (form, key, value) => {
  return {
    type: UPDATEINPUT,
    payload: { form, key, value }
  }
}

export const register = (data) => {
  return {
    type: REGISTER,
    payload: data
  }
}

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data,
  }
}

export const updateGoogleLoginData = (data) => {
  return {
    type: GOOGLE_LOGIN,
    payload: data,
  }
}