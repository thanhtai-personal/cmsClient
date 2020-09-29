import {
  LOGIN,
  REGISTER,
  UPDATEINPUT,
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