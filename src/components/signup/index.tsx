import React from 'react'
import { updateRegisterData } from 'root/actions/register'
import { register } from 'root/actions/auth'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface SignupProps {
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  updateRegisterData: any,
  text: any,
  register: any
}

interface SignupState {
}

const SignUpComponent = (props: SignupProps, state: SignupState) => {
  const classes = useStyles()
  const {
    firstName,
    lastName,
    userName,
    password,
    updateRegisterData, text, register
  } = props
  const handleSubmit = () => {
    register && typeof register === 'function' && register({
      firstName,
      lastName,
      userName,
      password,
    })
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {text.register}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label={text.firstName}
                defaultValue={firstName}
                autoFocus
                onChange={(e: any) => updateRegisterData({ path: 'firstName', value: e?.currentTarget?.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label={text.lastName}
                name='lastName'
                autoComplete='lname'
                defaultValue={lastName}
                onChange={(e: any) => updateRegisterData({ path: 'lastName', value: e?.currentTarget?.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label={text.userName}
                name='email'
                autoComplete='email'
                defaultValue={userName}
                onChange={(e: any) => updateRegisterData({ path: 'userName', value: e?.currentTarget?.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label={text.password}
                type='password'
                id='password'
                autoComplete='current-password'
                defaultValue={password}
                onChange={(e: any) => updateRegisterData({ path: 'password', value: e?.currentTarget?.value })}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            {text.register}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/login'>
                {text.readyHaveAccount}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}


interface RootState {
  register: any
}

const mapState = (state: RootState) => ({
  userName: state.register?.userName,
  password: state.register?.password,
  firstName: state.register?.firstName,
  lastName: state.register?.lastName
})

const mapDispatch = {
  updateRegisterData,
  register
}

export default connect(mapState, mapDispatch)(SignUpComponent)