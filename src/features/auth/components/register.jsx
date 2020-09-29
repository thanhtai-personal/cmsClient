import React from 'react'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Container,
  Typography
} from '@material-ui/core'

import {
  MaterialUITextField as TextField
} from 'root/components/materialUI'

import { withValidateForm, withValidateField } from 'root/components/validateForm'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

import {
  updateInputData,
  register
} from './../actions'

import {
  FORM_REGISTER,
  FEATURE_AUTH
} from 'root/actionTypes'

const WithTalidateTextField = withValidateField(TextField, { feature: FEATURE_AUTH, form: FORM_REGISTER })

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

const SignUpComponent = (props, state) => {
  const classes = useStyles()
  const {
    inputData,
    updateInputData,
    text = {
      firstName: 'First Name',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      userName: 'Email',
      password: 'Password',
      register: 'signup',
      readyHaveAccount: 'Already have an account? Sign in'
    }
    , register
    , isFormValidated
  } = props

  const {
    firstName,
    middleName,
    lastName,
    email,
    password
  } = inputData

  const updateRegisterData = (key, value) => {
    updateInputData
      && typeof updateInputData === 'function'
      && updateInputData(FORM_REGISTER, key, value)
  }

  const handleSubmit = () => {
    register && typeof register === 'function' && register(inputData)
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
            <Grid item xs={12} sm={4}>
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
                onChange={(e) => updateRegisterData('firstName', e?.currentTarget?.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete='mname'
                name='middleName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label={text.middleName}
                defaultValue={middleName}
                autoFocus
                onChange={(e) => updateRegisterData('middleName', e?.currentTarget?.value)}
              />
            </Grid>
            <Grid
              item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label={text.lastName}
                name='lastName'
                autoComplete='lname'
                defaultValue={lastName}
                onChange={(e) => updateRegisterData('lastName', e?.currentTarget?.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <WithTalidateTextField
                useFirstUpdate
                validatedName='email'
                key='userName'
                variant='outlined'
                required={true}
                fullWidth={true}
                id='email'
                label={text.email}
                name='email'
                autoComplete='email'
                defaultValue={email}
                onChange={(e) => updateRegisterData('email', e?.currentTarget?.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <WithTalidateTextField
                useFirstUpdate
                validatedName='password'
                key='password'
                variant='outlined'
                required
                fullWidth
                id='password'
                type='password'
                label={text.password}
                name='password'
                autoComplete='password'
                defaultValue={password}
                onChange={(e) => updateRegisterData('password', e?.currentTarget?.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={!isFormValidated}
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


const mapState = (state) => ({
  inputData: state.auth[FORM_REGISTER].data,
})

const mapDispatch = {
  updateInputData,
  register
}

export default withValidateForm(connect(mapState, mapDispatch)(SignUpComponent), {
  feature: FEATURE_AUTH, form: FORM_REGISTER, useFirstUpdate: true
})