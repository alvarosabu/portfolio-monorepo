import { watch } from 'vue'
export enum FieldTypes {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  NUMBER = 'number',
  EMAIL = 'email',
  URL = 'url',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  CUSTOM = 'custom-field',
  COLOR = 'color',
}

export type ControlValue = string | number | boolean

export type ValidationErrors = {
  // eslint-disable-next-line
  [key: string]: any
}
export interface ValidatorFn {
  (value: ControlValue | undefined): ValidationErrors | null
}

export interface InputValidator {
  validator: ValidatorFn
  text: string
  type: string
}

export interface InputControl {
  value: ControlValue
  errors: ValidationErrors
  touched: boolean
  dirty: boolean
  valid: boolean
  validations?: InputValidator[]
}

const EMAIL_REGEXP =
  /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
const URL_REGEXP =
  /^((?:(https?):\/\/)?((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9]))|(?:(?:(?:\w+\.){1,2}[\w]{2,3})))(?::(\d+))?((?:\/[\w]+)*)(?:\/|(\/[\w]+\.[\w]{3,4})|(\?(?:([\w]+=[\w]+)&)*([\w]+=[\w]+))?|\?(?:(wsdl|wadl))))$/

export const isEmptyInputValue = (value: any): boolean => value == null || value === ''

export const required = (value: ControlValue): ValidationErrors => ({
  required: isEmptyInputValue(value) ? true : null,
})

export const email = (value: ControlValue): ValidationErrors => {
  if (isEmptyInputValue(value)) {
    return { email: null } // don't validate empty values to allow optional controls
  }
  return { email: EMAIL_REGEXP.test(`${value}`) ? null : true }
}

export function useInputValidation(control: InputControl) {
  function validate() {
    control.errors = {}
    control.validations?.forEach((validation: InputValidator) => {
      const error = validation.validator(control.value)
      if (error && error[validation.type]) {
        control.errors[validation.type] = validation.text
      } else {
        control.errors[validation.type] = null
      }
    })
  }

  watch(control, state => {
    control.valid = Object.values(state.errors).every(error => error === null)
  })

  return {
    validate,
  }
}
