import React from 'react'
import { TextField } from '@material-ui/core'
import { CustomFieldDisplayNames } from '../constants'

class TextFieldCustom extends React.Component {
  static displayName = CustomFieldDisplayNames.MaterialUITextField

  render (){
    return (
      <TextField {...this.props} />
    )
  }
}

export default TextFieldCustom