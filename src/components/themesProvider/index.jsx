import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core"
import { getThemeByName, themeEnum } from './themes'

export const ThemeContext = React.createContext((themeName) => {})

const useMultiThemes = (ComposedComponent) => {
  
  const ThemeProvider = (props) => {
    const [themeName, setTheme] = useState(themeEnum.light)
    const theme = getThemeByName(themeName)
    return (
      <ThemeContext.Provider value={setTheme}>
        <MuiThemeProvider theme={theme}>
          <ComposedComponent {...props}/>
        </MuiThemeProvider>
      </ThemeContext.Provider>
    )
  }

  return ThemeProvider
}

export default useMultiThemes

