import {
  LOGIN
} from 'root/actionTypes'

export const requireAuth = (ComposedComponent) => {
  class RequireAuthComponent extends React.PureComponent {
    // Push to login route if not authenticated on mount

    getToken () {
      return window.sessionStorage.getItem('jwtToken');
    }

    componentWillMount () {
      if (!this.getToken()) {
        this.props.history.push('/login')
      } else {
        this.props.login()
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

  const mapDispatchToProps = (dispatch) => {
    return {
      login: () => dispatch(LOGIN)
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuthComponent)

}
