import actionType from 'root/actionTypes'

export const updateRegisterData = (data) => {
  let payload = {
    [data.path]: data.value
  }
  return {
    type: actionType.UPDATE_REGISTER_DATA.SUCCESS,
    payload
  }
}