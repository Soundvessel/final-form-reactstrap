import React from 'react'
// Reactstrap
import { Alert } from 'reactstrap'

/**
 * Produces error alert when Final-form has validation errors on submission attempt.
 *
 * Useful with forms where user is scrolled away from highlighted fields.
 *
 * @param hasValidationErrors - Final-form state of same name
 * @param submitFailed - Final-form state of same name
 * @param [msg = 'Please fix the highlighted errors above.'] - Optional error message to override default
 * @returns {*} bootstrap danger context alert with error message
 */

const ValidationErrorAlert = ({
  hasValidationErrors,
  submitFailed,
  msg = 'Please fix the highlighted errors above.'
}) => (
  <React.Fragment>
    {// If validation errors when submitted, display an alert
    hasValidationErrors && submitFailed ? (
      <Alert color="danger">{msg}</Alert>
    ) : null}
  </React.Fragment>
)

export default ValidationErrorAlert
