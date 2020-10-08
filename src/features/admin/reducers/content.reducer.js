import {
  UPDATE_MAIN_MENU_SELECTED,
  UPDATE_SECONDARY_MENU_SELECTED
} from 'root/actionTypes'


const initalState = {
  key: ''
}

const contentReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_MAIN_MENU_SELECTED:
    case UPDATE_SECONDARY_MENU_SELECTED:
      return {
        ...state,
        key: payload.key
      }
    default:
      return state
  }
}

export default contentReducer