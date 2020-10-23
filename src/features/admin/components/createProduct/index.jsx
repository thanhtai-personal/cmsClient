import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Switch
} from '@material-ui/core'
import {
  FORM_ADD_PRODUCT,
  FEATURE_ADMIN
} from 'root/actionTypes'
import {
} from './../../actions/createProduct'
import { withValidateForm, withValidateField } from 'root/components/validateForm'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const WithValidateTextField = withValidateField(TextField, { feature: FEATURE_ADMIN, form: FORM_ADD_PRODUCT })


const useStyles = makeStyles((theme) => ({
  container: {
    height: '90vh',
    overflowY: 'auto'
  },
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
  viewModeText: {
    color: 'black'
  }
}))


const CreateProduct = (props) => {
  const classes = useStyles()
  const { text = {
    productCreation: 'Add Product',
    title: 'Title',
    create: 'Add',
    summary: 'Summary',
    viewMode: 'Review:'
  }
    , updateInputData, inputData, isFormValidated
  } = props
  const { title, summary } = inputData

  //state
  const [ viewFullSummaryText, setViewFullSummaryText ] = useState(false)

  const submitLogin = (event) => {
    event.preventDefault()
  }

  const onChangeInput = (key) => {
    return (e) => {
      typeof updateInputData === 'function' && updateInputData(FORM_ADD_PRODUCT, key, e?.currentTarget?.value)
    }
  }

  return (
    <Container component='main' maxWidth={false} className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {text.productCreation}
        </Typography>
        <form className={classes.form} noValidate={false} autoComplete='off'>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6}>
                  <WithValidateTextField
                    useFirstUpdate
                    validatedName='title'
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='title'
                    label={text.title}
                    name='title'
                    autoFocus
                    autoComplete={'true'}
                    onChange={onChangeInput('title')}
                    defaultValue={title}
                  />
                </Grid>
                <Grid item xs={6}>

                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={10}>
                  <TextField 
                     disabled={!!viewFullSummaryText}
                     variant='outlined'
                     margin='normal'
                     required
                     fullWidth
                     multiline
                     rows={5}
                     rowsMax={viewFullSummaryText ? 1000 : 5}
                     id='summary'
                     label={text.summary}
                     name='summary'
                     autoFocus
                     autoComplete={'true'}
                     onChange={onChangeInput('summary')}
                     defaultValue={summary}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Grid component='label' container alignItems='center' spacing={1}>
                    <Grid item className={classes.viewModeText}>{text.viewMode}</Grid>
                    <Grid item>
                      <Switch
                        checked={viewFullSummaryText}
                        onChange={(e) => {
                          setViewFullSummaryText(e?.target?.checked)
                        }}
                        color='primary'
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={11}></Grid>
            <Grid item xs={1}>
              <Button
                onClick={submitLogin}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={!isFormValidated}
              >
                {text.create}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

const mapState = (state) => ({
  inputData: state[FEATURE_ADMIN][FORM_ADD_PRODUCT].data
})

const mapDispatch = {
}

export default withValidateForm(connect(mapState, mapDispatch)(CreateProduct), {
  feature: FEATURE_ADMIN,
  form: FORM_ADD_PRODUCT,
  useFirstUpdate: true
})