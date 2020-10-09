import React from 'react'
import { connect } from 'react-redux'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider
} from '@material-ui/core'

import {
  updateSelectMainMenu,
  updateSelectSecondaryMenu
} from './../../actions/menu'
import { reducerNames } from './../../setup'




const MainListItems = (props) => {

  const { adminMenu = {}
    , updateSelectMainMenu
    , updateSelectSecondaryMenu
  } = props

  const mainListItems = Object.keys(adminMenu.mainListItems || {}).map((key) => {
    return adminMenu.mainListItems[key]
  })
  const secondaryListItems = Object.keys(adminMenu.secondaryListItems || {}).map((key) => {
    return adminMenu.secondaryListItems[key]
  })

  const renderItems = (listItems, selectFuntion) => {
    return listItems.map((item, index) => {
      return (
        <ListItem key={`mainListItems-${item.key || index}`} button selected={!!item.selected}
          onClick={() => { 
            selectFuntion(item.key) 
          }}
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      )
    })
  }
  return (
    <>
      <List>{renderItems(mainListItems, updateSelectMainMenu)}</List>
      <Divider />
      <ListSubheader inset>Saved reports</ListSubheader>
      <List>{renderItems(secondaryListItems, updateSelectSecondaryMenu)}</List>
    </>
  )
}

const mapState = (state) => ({
  adminMenu: state[reducerNames.adminMenu]
})

const mapDispatch = {
  updateSelectMainMenu,
  updateSelectSecondaryMenu
}

export default connect(mapState, mapDispatch)(MainListItems)