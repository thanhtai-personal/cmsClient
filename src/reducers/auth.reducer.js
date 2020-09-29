import actionType from 'root/actionTypes'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_USER_DATA.SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionType.UPDATE_USER_DATA.FAILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}