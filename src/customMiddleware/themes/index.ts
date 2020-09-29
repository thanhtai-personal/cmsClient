import { Theme } from '@material-ui/core'
import { lightTheme } from './light'
import { darkTheme } from './dark'
import CONSTANTS from 'root/constants/constants'
const { themeEnum } = CONSTANTS

export function getThemeByName(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  [themeEnum.light]: lightTheme,
  [themeEnum.dark]: darkTheme
};