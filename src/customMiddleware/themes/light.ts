import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'bisque',
        display: 'flex',
        float: 'left',
      }
    },
    MuiCardMedia: {
      root: {
        display: 'flex',
        float: 'right',
      }
    },
    MuiCardContent: {
      root: {
        backgroundColor: 'bisque',
        flex: '1 0 auto',
        fontSize: '12px',
      }
    },
    MuiContainer: {
      root: {
        backgroundColor: 'bisque',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'bisque'
        },
        h5: {
          fontcolor: 'white',
          color: 'black'
        }
      }
    },
    MuiButton: {
      root: {
        color: 'white'
      }
    },
    MuiLink: {
      root: {
        color: 'white'
      }
    },
    MuiTypography: {
      root: {
      }
    },
    MuiExpansionPanel: {
      root: { 
        backgroundColor: 'steelblue',
        fontSize: '12px',
        color: 'black',
        border: 'solid 1px yellow'
      }
    },
    MuiDrawer: {
      root: {
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '0.6em',
        color: 'white'
      },
      secondary: {
        fontSize: '1.2em',
        color: 'yellow'
      }
    }
  }
});