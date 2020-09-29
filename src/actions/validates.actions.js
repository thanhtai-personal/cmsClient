import {
  UPDATE_VALIDATE_DATA
} from 'root/actionTypes'

export const updateValidateData = (form, key, value) => {
  return {
    type: UPDATE_VALIDATE_DATA,
    payload: { form, key, value }
  }
}