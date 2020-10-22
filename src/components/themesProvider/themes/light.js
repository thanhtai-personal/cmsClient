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
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'green',
        }
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '0.9em',
        color: 'white',
      },
      secondary: {
        fontSize: '0.7em',
        color: 'black'
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'rgba(252, 186, 3, 0.54)',
        backgroundColor: 'transparent'
      }
    },
    MuiToolbar:{
      root: {
        backgroundColor: 'black'
      }
    },
    MuiDialogContent: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiDialogActions: {
      root: {
        color: 'white'
      }
    }
  }
})

export default lightTheme 