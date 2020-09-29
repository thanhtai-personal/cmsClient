import React from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import SignupComponent from 'root/components/signup'

interface RegisterProps {
  lang: any
}
interface RegisterState { }

class RegisterContainer extends React.PureComponent<RegisterProps, RegisterState> {
  render() {
    return (
      <Container maxWidth='xl'>
        <SignupComponent text={this.props.lang?.registerContainer} />
      </Container>)
  }
}

interface RootState {}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)