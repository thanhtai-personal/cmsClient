import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, IconButton, Grid, Switch, useMediaQuery
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LinkButton from 'root/components/commons/linkButton'
import CONSTANTS from 'root/constants/constants'
import { ThemeContext } from 'root/customMiddleware/multiThemeProvider'

const { themeEnum } = CONSTANTS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

interface HeaderProps {
  history: any,
  lang: any,
}

const Header = (props: HeaderProps) => {
  const classes = useStyles()
  const { lang } = props
  const text = lang?.headerComponent
  const setTheme = useContext(ThemeContext)
  const onChangeTheme = (e: any) => {
    const checked = e?.target?.checked
    if (checked) {
      setTheme(themeEnum.dark)
    } else {
      setTheme(themeEnum.light)
    }
  }
  const matches = useMediaQuery('(max-width:450px)')
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography component='div'>
            <Grid component='label' container alignItems='center' spacing={1}>
              <Grid item>{text.light}</Grid>
              <Grid item>
                <Switch defaultChecked={false} onChange={onChangeTheme} name='checkedC' />
              </Grid>
              <Grid item>{text.dark}</Grid>
            </Grid>
          </Typography>
          <Typography variant='h6' className={classes.title} />
          <LinkButton to={'/aboutMe'} text={text.aboutMe} />
          {!matches && <LinkButton to={'/login'} text={text.login} />}
          {!matches && <LinkButton to={'/register'} text={text.register} />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header