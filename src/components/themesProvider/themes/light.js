import { createMuiTheme } from '@material-ui/core'

const lightTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: '#E2EEE2',
        paddingBottom: '24px',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#CCD8CC'
        }
      }
    },
    MuiButton: {
      root: {
        color: 'gray'
      }
    },
    MuiButtonBase: {
      root: {
        color: 'black'
      }
    },
    MuiLink: {
      root: {
        color: 'green'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: 'steelblue',
        color: 'white'
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '0.8em',
        color: 'white'
      },
      secondary: {
        fontSize: '1.2em',
        color: 'black'
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'rgba(252, 186, 3, 0.54)',
        backgroundColor: 'steelblue'
      }
    }
  }
})

export default lightTheme 