import React from 'react'
import { connect } from 'react-redux'


const AdminContent = (props) => {
  const { contentKey } = props
  return (
    <>
    {contentKey}
    </>
  )
}

const mapState = (state) => ({
  contentKey: state.adminContent?.key
})

const mapActions = {

}

export default connect(mapState, mapActions)(AdminContent)