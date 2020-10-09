
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  Assessment as AssignmentIcon
} from '@material-ui/icons'

import {
  UPDATE_MAIN_MENU_SELECTED,
  UPDATE_SECONDARY_MENU_SELECTED
} from 'root/actionTypes'

import { adminApiNames } from './../apis'


const initalState = {
  mainListItems: {
    [adminApiNames.dashboard]: {
      key: adminApiNames.dashboard,
      name: 'Dashboard',
      icon: DashboardIcon,
      selected: false
    },
    [adminApiNames.products]: {
      key: adminApiNames.products,
      name: 'Products',
      icon: ShoppingCartIcon,
      selected: true
    },
    [adminApiNames.users]: {
      key: adminApiNames.users,
      name: 'Users',
      icon: PeopleIcon,
      selected: false
    },
    [adminApiNames.reports]: {
      key: adminApiNames.reports,
      name: 'Reports',
      icon: BarChartIcon,
      selected: false
    },
    [adminApiNames.integrations]: {
      key: adminApiNames.integrations,
      name: 'Integrations',
      icon: LayersIcon,
      selected: false
    }
  },
  secondaryListItems: {
    [adminApiNames.currentMonth]: {
      key: adminApiNames.currentMonth,
      name: 'Current month',
      icon: AssignmentIcon,
      selected: false
    },
    [adminApiNames.lastQuarter]: {
      key: adminApiNames.lastQuarter,
      name: 'Last quarter',
      icon: AssignmentIcon,
      selected: false
    },
    [adminApiNames.yearEndSale]: {
      key: adminApiNames.yearEndSale,
      name: 'Year-end sale',
      icon: AssignmentIcon,
      selected: false
    }
  }
}

const menuReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_MAIN_MENU_SELECTED:
      return {
        ...state,
        mainListItems: {
          ...initalState.mainListItems,
          [payload.key]: {
            ...initalState.mainListItems[payload.key],
            selected: true
          }
        },
        secondaryListItems: {
          ...initalState.secondaryListItems,
        },
      }
    case UPDATE_SECONDARY_MENU_SELECTED:
      return {
        ...state,
        mainListItems: {
          ...initalState.mainListItems,
        },
        secondaryListItems: {
          ...initalState.secondaryListItems,
          [payload.key]: {
            ...initalState.secondaryListItems[payload.key],
            selected: true
          }
        },
      }
    default:
      return state
  }
}

export default menuReducer