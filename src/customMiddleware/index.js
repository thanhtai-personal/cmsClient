import React, { useEffect, useState, Suspense } from 'react'
import { CircularProgress } from '@material-ui/core'
import { connect } from 'react-redux'
import eventEmitter from 'event-emitter'
import en from 'root/constants/languages/en.json'
import lanuageConfig from 'root/constants/languages'
import actionType from 'root/actionTypes'
import { CenterStyled } from 'root/constants/commonStyled'
import MultiThemeWrapper from './multiThemeProvider'

const _eventEmitter = eventEmitter()

export const useMultiThemes = (ComposedComponent) => {
  
  return class MultiThemeWrapperComponent extends React.PureComponent {
    render() {
      return (
        <MultiThemeWrapper>
          <ComposedComponent />
        </MultiThemeWrapper>
      )
    }
  }
}
export const requireAuth = (ComposedComponent) => {
  class RequireAuthComponent extends React.PureComponent {
    // Push to login route if not authenticated on mount

    getToken () {
      return window.localStorage.getItem('jwtToken');
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
      login: () => dispatch(actionType.LOGIN.PENDING)
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuthComponent)

}

export const useLayout = (Layout, ComposedComponent) => {
  class UseLayoutComponent extends React.PureComponent {
    render () {
      return (
        < React.Fragment >
          {Layout.header && <Layout.header history={this.props.history} lang={this.props.lang} />}
          <ComposedComponent {...this.props} />
          {Layout.footer && <Layout.footer />}
        </React.Fragment >
      )
    }
  }
  return UseLayoutComponent
}

export const withEventEmitter = (ComposedComponent) => {
  class WithEventComponent extends React.PureComponent {
    render () {
      return <ComposedComponent
        eventEmitter={_eventEmitter}
        {...this.props}
      />
    }
  }
  return WithEventComponent
}

export const useLocalization = (ComposedComponent) => {
  const LocalizedComponent = (props) => {
    const [language, setLanguage] = useState(en)
    useEffect(() => {
      setLanguage(lanuageConfig.find((lang) => lang.test?.test(window.location.href))?.value || en)
    }, [])
    return (
      <ComposedComponent lang={language} setLanguage={setLanguage} {...props} />
    )
  }

  return LocalizedComponent
}


export const makeSuspenseComponent = (ComposedComponent) => {
  const SuspenseComponent = (props) => {
    return (
      <Suspense fallback={<CenterStyled><CircularProgress /></CenterStyled>}>
        <ComposedComponent {...props} />
      </Suspense>
    )
  }
  return SuspenseComponent
}