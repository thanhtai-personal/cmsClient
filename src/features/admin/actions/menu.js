import {
  UPDATE_MAIN_MENU_SELECTED,
  UPDATE_SECONDARY_MENU_SELECTED
} from 'root/actionTypes'

export const updateSelectMainMenu = (key) => {
  return {
    type: UPDATE_MAIN_MENU_SELECTED,
    payload: { key }
  }
}

export const updateSelectSecondaryMenu = (key) => {
  return {
    type: UPDATE_SECONDARY_MENU_SELECTED,
    payload: { key }
  }
}