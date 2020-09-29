import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { CenterChildrenStyled } from 'root/constants/commonStyled'

interface LoadingCompProps {
}

interface LoadingCompState { }

const LoadingComponent = (props: LoadingCompProps, state: LoadingCompState) => {
  return (<CenterChildrenStyled>
    <CircularProgress color="secondary" />
  </CenterChildrenStyled>)
}

export default LoadingComponent