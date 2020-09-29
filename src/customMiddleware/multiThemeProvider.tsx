import React, { useState } from 'react'
import { MuiThemeProvider } from "@material-ui/core"
import { getThemeByName } from './themes'
import CONSTANTS from 'root/constants/constants'
const { themeEnum } = CONSTANTS

export const ThemeContext = React.createContext((themeName: string): void => {})

const ThemeProvider: React.FC = (props) => {
  const [themeName, setTheme] = useState(themeEnum.light)
  const theme = getThemeByName(themeName)
  return (
    <ThemeContext.Provider value={setTheme}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider