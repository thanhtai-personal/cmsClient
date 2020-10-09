import {
  UPDATE_MAIN_MENU_SELECTED,
  UPDATE_SECONDARY_MENU_SELECTED,
  UPDATE_PRODUCT_TABLE_CONFIG
} from 'root/actionTypes'

import { adminApiNames } from './../apis'

const initalState = {
  key: '',
  [adminApiNames.products]: {
    tableConfig: {
      columns: []
    },
    listData: [
      {
        key: 'product-1',
        name: 'product 1',
        description: 'description product 1',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      },
      {
        key: 'product-2',
        name: 'product 2',
        description: 'description product 2',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      },
      {
        key: 'product-3',
        name: 'product 3',
        description: 'description product 3',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      },
      {
        key: 'product-4',
        name: 'product 4',
        description: 'description product 4',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      },
      {
        key: 'product-5',
        name: 'product 5',
        description: 'description product 5',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      },
      {
        key: 'product-6',
        name: 'product 6',
        description: 'description product 6',
        unitPrice: 125000,
        quantity: 20,
        sold: 15,
        inventory: 5
      }
    ]
  }
}

const contentReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_MAIN_MENU_SELECTED:
    case UPDATE_SECONDARY_MENU_SELECTED:
      return {
        ...state,
        key: payload.key
      }
    case UPDATE_PRODUCT_TABLE_CONFIG: 
      return {
        ...state,
        [adminApiNames.products]: {
          ...state[adminApiNames.products],
          tableConfig: payload
        }
      }
    default:
      return state
  }
}

export default contentReducer