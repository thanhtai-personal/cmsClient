import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import LoginComponent from 'root/components/login'

interface LoginProps {
  lang: any
}
interface LoginState { }

class LoginContainer extends React.PureComponent<LoginProps, LoginState> {
  render() {
    return (
      <Container maxWidth='xl'>
        <LoginComponent text={this.props.lang?.loginContainer} />
      </Container>)
  }
}

interface RootState {
  login: any
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)