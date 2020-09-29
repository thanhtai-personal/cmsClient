import React from 'react'
import { connect } from 'react-redux'

import { updateValidateData } from 'root/actions/validates.actions'
import Util from 'root/utils'
import { isObject } from 'util'
import validatesConfig from './validates'

export const withValidateField = (WrappedField, formInfo = {}) => {
  const formDataPath = `${formInfo.feature}.${formInfo.form}.data`
  const validateFunctions = validatesConfig[formInfo.feature][formInfo.form]
  const validatedDataPath = `${formInfo.feature}.${formInfo.form}.validatedData`

  const WithValidateFieldComponent = (props) => {
    const { formData
      , useFirstUpdate
      , onChange
      , validatedName
      , validatedData
      , ...nestedProps
    } = props

    const onChangeWithValidate = (e, data) => {
      const value = e?.target?.value || ''
      if (!validatedData.firstUpdated && useFirstUpdate) {
        updateValidateData && typeof updateValidateData == 'function' && updateValidateData(formInfo.form, 'firstUpdated', true)
      }
      const validateFunction = validateFunctions[validatedName] || (() => {})
      updateValidateData && typeof updateValidateData == 'function' && updateValidateData(formInfo.form, validatedName, validateFunction(value))
      onChange && typeof onChange === 'function' && onChange(e, data)
    }

    const onReleaseField = (e) => {
      const { validatedData } = props
      let validated = true
      Object.keys(validatedData).forEach((key) => {
        if (isObject(validatedData[key]) 
        && Object.keys(validatedData[key]).includes('isValidated')
        && !validatedData[key].isValidated
        ) {
          validated = false
        }
      })
      updateValidateData && typeof updateValidateData == 'function' && updateValidateData(formInfo.form, 'isFormValidated', validated)
    }

    return <WrappedField
      {...nestedProps}
      error={validatedData[validatedName].isValidated && validatedData.firstUpdated}
      errorText={validatedData[validatedName].message}
      onBlur={onReleaseField}
      onChange={onChangeWithValidate}
    />
  }

  const useState = (state) => ({
    formData: Util.get(state, formDataPath),
    validatedData: Util.get(state, validatedDataPath),
  })
  const useAction = {
    updateValidateData
  }
  return connect(useState, useAction)(WithValidateFieldComponent)
}

export const withValidateForm = (WrappedForm, formInfo = {}) => {
  const formDataPath = `${formInfo.feature}.${formInfo.form}.data`
  const validatedDataPath = `${formInfo.feature}.${formInfo.form}.validatedData`

  const WithValidateFormComponent = (props) => {
    const { validatedData: { isFormValidated, firstUpdated }
      , ...nestedProps
    } = props

    return <WrappedForm
      isFormValidated={isFormValidated && (formInfo.useFirstUpdate ? firstUpdated : true)}
      {...nestedProps}
    />
  }

  const useState = (state) => ({
    formData: Util.get(state, formDataPath),
    validatedData: Util.get(state, validatedDataPath),
  })
  const useAction = {

  }
  return connect(useState, useAction)(WithValidateFormComponent)
}