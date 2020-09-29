import React from 'react'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { login } from 'root/actions/auth'
import { updateLoginData } from 'root/actions/login'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface LoginProps {
  userName: String,
  password: String,
  updateLoginData: any,
  text: any,
  login: any
}

interface LoginState { }

const LoginComponent = (props: LoginProps, state: LoginState) => {
  const classes = useStyles()
  const { text = {}, login, updateLoginData, userName, password } = props
  const submitLogin = (event: any) => {
    event.preventDefault()
    typeof login === 'function' && login({ email: userName, password: password })
  }

  const onChangeEmail = (e: any) => {
    typeof updateLoginData === 'function' && updateLoginData({ path: 'userName', value: e?.currentTarget?.value })
  }

  const onChangePassword = (e: any) => {
    typeof updateLoginData === 'function' && updateLoginData({ path: 'password', value: e?.currentTarget?.value })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {text.login}
        </Typography>
        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label={text.email}
            name='email'
            autoFocus
            autoComplete={'true'}
            onChange={onChangeEmail}
            defaultValue={userName}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label={text.password}
            type='password'
            id='password'
            onChange={onChangePassword}
            autoComplete={'true'}
            defaultValue={password}
          />
          <Button
            onClick={submitLogin}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {text.login}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/forgetPassword'>
                {text.forgot}
              </Link>
            </Grid>
            <Grid item>
              <Link to='/register'>
                {text.dontHaveAccount}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

interface RootState {
  login: any,
}

const mapState = (state: RootState) => ({
  userName: state.login?.userName,
  password: state.login?.password
})

const mapDispatch = {
  updateLoginData,
  login
}

export default connect(mapState, mapDispatch)(LoginComponent)