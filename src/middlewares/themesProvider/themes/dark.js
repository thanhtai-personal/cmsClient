import { createMuiTheme } from '@material-ui/core';

const darkTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'darkslateblue',
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
        backgroundColor: 'darkslateblue',
        flex: '1 0 auto',
        fontSize: '12px',
      }
    },
    MuiContainer: {
      root: {
        backgroundColor: 'darkslateblue',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'darkslateblue'
        },
        h5: {
          fontcolor: 'white',
          color: 'white'
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

export default darkTheme