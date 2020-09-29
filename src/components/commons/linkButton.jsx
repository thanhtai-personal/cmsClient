import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
  const { to, text, ...nestedProps } = props
  return (
    <Button {...nestedProps}>
      <Link to={props.to}><Typography>{props.text}</Typography></Link>
    </Button>
  )
}

export default LinkButton