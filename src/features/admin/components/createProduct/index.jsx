import React from 'react'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Link
} from '@material-ui/core'
import {
  FORM_LOGIN,
  FEATURE_AUTH
} from 'root/actionTypes'
import {
} from './../../actions/createProduct'
import { withValidateForm, withValidateField } from 'root/components/validateForm'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const WithValidateTextField = withValidateField(TextField, { feature: FEATURE_AUTH, form: FORM_LOGIN })


const useStyles = makeStyles((theme) => ({
  paper: {
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


const CreateProduct = (props) => {
  const classes = useStyles()
  const { text = {
    googleLogin: 'Sign in with Google',
    login: 'Login',
    email: 'Email Address',
    password: 'Password',
    forgot: 'Forgot password?',
    dontHaveAccount: 'Don\'t have an account? Sign Up',
    facebookLogin: 'Sign in with Facebook'
  }
    , updateGoogleLoginData
    , login, updateInputData, inputData, isFormValidated } = props
  const { email, password } = inputData

  const submitLogin = (event) => {
    event.preventDefault()
    console.log('email, password', email, password)
    typeof login === 'function' && login({ email, password })
  }

  const onChangeEmail = (e) => {
    typeof updateInputData === 'function' && updateInputData(FORM_LOGIN, 'email', e?.currentTarget?.value)
  }

  const onChangePassword = (e) => {
    typeof updateInputData === 'function' && updateInputData(FORM_LOGIN, 'password', e?.currentTarget?.value)
  }

  const onGGLoginSuccess = (googleUser) => {
    var profile = googleUser.getBasicProfile()
    updateGoogleLoginData({
      fullName: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      googleId: profile.getId(),
      firstName: profile.getFamilyName(),
      lastName: profile.getGivenName()
    })
  }

  const onGGLoginFailure = (googleUser) => {
  }

  const responseFacebook = (responseData) => {
    updateGoogleLoginData({
      fullName: responseData.name,
      email: responseData.email,
      image: responseData.picture.url,
      facebookId: responseData.id,
      accessToken: responseData.accessToken
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
          {text.login}
        </Typography>
        <form className={classes.form} noValidate={false} autoComplete='off'>
          <WithValidateTextField
            useFirstUpdate
            validatedName='email'
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
            defaultValue={email}
          />
          <WithValidateTextField
            useFirstUpdate
            validatedName='password'
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
            disabled={!isFormValidated}
          >
            {text.login}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='/forgetPassword'>
                {text.forgot}
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register'>
                {text.dontHaveAccount}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

const mapState = (state) => ({
  inputData: state.auth[FORM_LOGIN].data
})

const mapDispatch = {
}

export default withValidateForm(connect(mapState, mapDispatch)(CreateProduct), {
  feature: FEATURE_AUTH,
  form: FORM_LOGIN,
  useFirstUpdate: true
})