import actionType from 'root/actionTypes'

const initialState = {
  userName: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_LOGIN_DATA.SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionType.UPDATE_LOGIN_DATA.FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}