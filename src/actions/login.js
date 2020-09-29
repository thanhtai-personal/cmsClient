import actionType from 'root/actionTypes'

export const updateLoginData = (data) => {
  let payload = {
    [data.path]: data.value
  }
  return {
    type: actionType.UPDATE_LOGIN_DATA.SUCCESS,
    payload
  }
}