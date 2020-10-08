
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


const initalState = {
  mainListItems: {
    dashboard: {
      key: 'dashboard',
      name: 'Dashboard',
      icon: DashboardIcon,
      selected: false
    },
    products: {
      key: 'products',
      name: 'Products',
      icon: ShoppingCartIcon,
      selected: false
    },
    users: {
      key: 'users',
      name: 'Users',
      icon: PeopleIcon,
      selected: false
    },
    reports: {
      key: 'reports',
      name: 'Reports',
      icon: BarChartIcon,
      selected: false
    },
    integrations: {
      key: 'integrations',
      name: 'Integrations',
      icon: LayersIcon,
      selected: false
    }
  },
  secondaryListItems: {
    currentMonth: {
      key: 'currentMonth',
      name: 'Current month',
      icon: AssignmentIcon,
      selected: false
    },
    lastQuarter: {
      key: 'lastQuarter',
      name: 'Last quarter',
      icon: AssignmentIcon,
      selected: false
    },
    yearEndSale: {
      key: 'yearEndSale',
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