import React from 'react'
import { connect } from 'react-redux'

import Util from 'root/utils'
import { MaterialUIFieldNames } from 'root/components/materialUI'
import validates from './validates'

// This function takes a component...
export const withValidateForm = (formName, WrappedComponent) => {
  // ...and returns another component...
  const ValidateFormHOC = (props) => {
    const { data = {} } = props
    const [isFormValidated, setIsFormValidated] = React.useState(true)
    const [firstUpdated, setFirstUpdated] = React.useState(false)
    const [fieldsValidate, setFieldValidate] = React.useState({})
    let validateFunctions = {}

    const getValidateFieldData = (key) => {
      return Util.get(validates, `${formName}.${key}`)
    }
    const checkFieldValidate = (key, value) => {
      const validateFunction = validateFunctions[key] || (() => {})
      let _fieldsValidate = {...fieldsValidate}
      _fieldsValidate[key] = validateFunction(value)
      setFieldValidate(_fieldsValidate) 
    }
    const checkFormValidate = () => {
      let _isFormValidated = true
      Object.keys(fieldsValidate).forEach((key) => {
        if (!fieldsValidate[key].isValidated) {
          _isFormValidated = false
        }
      })
      if (_isFormValidated !== isFormValidated) {
        setIsFormValidated(_isFormValidated)
      }
    }
    const checkDefaultValidatedField = (key) => {
      let valueCheck = data[key] || ''
      if (!valueCheck) return false
      return checkFieldValidate(key, valueCheck)
    }
    const validateOnChange = (key, value) => {
      if (!firstUpdated) {
        setFirstUpdated(true)
      }
      checkFieldValidate(key, value)
      checkFormValidate()
    }
    const withValidateField = (FieldComponent, props) => {
      const { key, onChange, ...nestedProps } = props   
      validateFunctions[key] = getValidateFieldData(key) || {}
      switch (FieldComponent.displayName) {
        case MaterialUIFieldNames.MaterialUITextField:
          return <FieldComponent
            {...nestedProps}
            error={!fieldsValidate[key]?.isValidated && firstUpdated}
            onChange={(e) => {
              const value = e?.target?.value || ''
              validateOnChange(key, value)
              onChange && typeof onChange === 'function' && onChange(e)
            }}
          />
        default: 
          return ''
      }
    }

    React.useEffect(() => {
      let _fieldsValidate = { ...fieldsValidate }
      Object.keys(validateFunctions).forEach((key) => {
        if (!validateFunctions[key]) {
          _fieldsValidate[key] = checkDefaultValidatedField(key)
        }
        if (_fieldsValidate[key]?.isValidated !== fieldsValidate[key]?.isValidated) {
          setFieldValidate(_fieldsValidate)
        }
      })
    }, [])

    return <WrappedComponent
      withValidateField={withValidateField}
      isFormValidated={isFormValidated && firstUpdated}
      {...props}
    />
  }

  const useState = (state) => ({
    data: Util.get(state, formName)
  })

  return connect(useState, null)(ValidateFormHOC)
}

