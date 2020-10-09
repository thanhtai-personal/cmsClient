import React from 'react'
import { connect } from 'react-redux'
import Products from './section/products'
import { adminApiNames } from './../apis'
import { reducerNames } from './../setup'



const AdminContent = (props) => {
  const { contentKey } = props

  switch (contentKey) {
    case adminApiNames.products:
      return (
        <Products
        />
      )
    default:
      return (
        <Products
        />
      )
  }
}

const mapState = (state) => ({
  contentKey: state[reducerNames.adminContent].key
})

const mapActions = {

}

export default connect(mapState, mapActions)(AdminContent)