import {
  UPDATE_PRODUCT_TABLE_CONFIG
} from 'root/actionTypes'

export const updateProductTableConfig = (newConfig) => {
  return {
    type: UPDATE_PRODUCT_TABLE_CONFIG,
    payload: newConfig
  }
}