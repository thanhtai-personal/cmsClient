import React from 'react'
import {
  Avatar,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'


const CommonForm = (props) => {
  const { container: { component = 'main', maxWidth = 'xs', ...nestedContainerProps }
    , cssBaseline = true
    , wrappedContentComponent: {
      isWrapped = true,
      ...nestedWrappedContentProps
    }
    , isAppAvatar = true
    , customAvatar
    , formTitle
    , formProps = {}
    , text = {}
    , fields = []
    , gridViews = []
    , unlimittedForm
  } = props

  const renderField = (_field, index = 'no-index') => {
    const { component, children, customRender, key, ...nestedFieldProps } = _field
    return (
      customRender && typeof customRender === 'function' ? customRender(_field)
        : component ? <component
          key={`field-${key}-${index}`}
          {...nestedFieldProps}
        >
          {children && renderField(children)}
        </component>
          : <div key={`field-${key}-${index}`} {...nestedFieldProps}>
            {children && renderField(children)}
          </div>
    )
  }

  const renderGridView = (grid, index = 'no-index') => {
    const { children, isField, key, isContainer, ...nestedGridProps } = grid
    return (
      isField ? renderField(grid, index) :
        <Grid key={`grid-${key}-${index}`}
          container={!!isContainer}
          item={!isContainer}
          {...nestedGridProps}>
          {renderGridView(grid)}
        </Grid>
    )
  }

  const renderContent = () => {
    return (
      <>
        { isAppAvatar && <Avatar className={classes.avatar}>
          {customAvatar ? customAvatar : < LockOutlinedIcon />}
        </Avatar>
        }
        {formTitle && <Typography component='h1' variant='h5'>
          {text[formTitle.textKey]}
        </Typography>}
        <form {...formProps}>
          {fields.map((field, index) => renderField(field, index))}
          {gridViews.map((gridView, index) => renderGridView(gridView, index))}
        </form>
      </>
    )
  }

  return unlimittedForm ? unlimittedForm
    : <Container component={component} maxWidth={maxWidth} {...nestedContainerProps}>
      {cssBaseline && <CssBaseline />}
      {isWrapped ? <div {...nestedWrappedContentProps}>
        {renderContent()}
      </div> : <>
          {renderContent()}
        </>
      }
    </Container>
}

export default CommonForm
