import actionType from 'root/actionTypes'

export const login = (data) => {
  return ({
    type: actionType.LOGIN.PENDING,
    data
  })
}

export const register = (data) => {
  return ({
    type: actionType.REGISTER.PENDING,
    data
  })
}