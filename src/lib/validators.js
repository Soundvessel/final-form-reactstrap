import isEmail from 'validator/lib/isEmail'

export const validateRequired = (msg = 'Required.') => value =>
  // check against length because unfilled checkboxes produces empty array
  value && value.length !== 0 ? undefined : msg

export const validateEmail = (
  msg = 'Please enter a valid email address.'
) => value => (isEmail(value) ? undefined : msg)

export const validateMatch = (fieldName, msg) => (value, allValues) =>
  value !== allValues[fieldName] ? msg : undefined

export const validateMustBeNumber = (msg = 'Must be a number.') => value =>
  isNaN(value) ? msg : undefined

export const validateMinLength = (
  minLength,
  msg = `Must be minimum of ${minLength}.`
) => val => (val.length < minLength ? msg : undefined)

export const validateMaxLength = (
  maxLength,
  msg = `Must be maximum of ${maxLength}.`
) => val => (val.length > maxLength ? msg : undefined)

export const validateAbove18 = val =>
  !isNaN(val) && val > 18 ? undefined : 'No kids allowed.'

export const validateIsThree = val =>
  val === 'three' ? undefined : 'You should select option three!'

// Function for combining validators
export const composeValidators = (...validators) => (...validatorParams) =>
  validators.reduce(
    (error, validator) => error || validator(...validatorParams),
    undefined
  )
