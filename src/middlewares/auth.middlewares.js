import React from 'react'
import { connect } from 'react-redux'
import { getAuth } from 'root/features/auth/actions'


export const requireAuth = (ComposedComponent) => {
  class RequireAuthComponent extends React.PureComponent {
    // Push to login route if not authenticated on mount

    getToken () {
      return window.localStorage.getItem('tttgalaxy--token');
    }

    componentWillMount () {
      let token = this.getToken();
      if (!token) {
        this.props.history.push('/login')
      } else {
        this.props.getAuth(token)
      }
    }

    // Otherwise render the original component
    render () {
      return <ComposedComponent {...this.props} />
    }

  }

  const mapStateToProps = (state) => {
    return {};
  }

  const mapDispatchToProps = {
    getAuth
  }

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuthComponent)

}
