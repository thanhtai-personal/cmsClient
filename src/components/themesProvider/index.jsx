import React from 'react'
import MultiThemeWrapper from './multiThemeProvider'


const useMultiThemes = (ComposedComponent) => {
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

export default useMultiThemes