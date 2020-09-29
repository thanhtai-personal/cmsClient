import actionType from 'root/actionTypes'

const initialState = {
  userName: '',
  password: '',
  firstName: '',
  lastName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_REGISTER_DATA.SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionType.UPDATE_REGISTER_DATA.FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}