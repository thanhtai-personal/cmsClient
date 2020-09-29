import authConstants from './auth.constants'

const themeEnum = {
  light: 'light',
  dark: 'dark'
}

export default {
  languageKeyEnRegex: new RegExp(/\/(en|EN|En|eN)\//),
  languageKeyViRegex: new RegExp(/\/(vi|VI|vI|Vi)\//),
  themeEnum,
  ...authConstants
}