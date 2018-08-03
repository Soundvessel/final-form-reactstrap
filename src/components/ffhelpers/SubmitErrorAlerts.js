import React from 'react'
import { map } from 'lodash'
// Reactstrap
import { Alert } from 'reactstrap'

/**
 * Produces error alerts from Final-Form submitError form state
 *
 * @param submitError - Final-Form form state of same name
 * @returns {*} stacked error alerts with bootstrap danger context only when errors exist
 *
 * @see https://github.com/final-form/final-form#submiterror-any-1
 * @see https://github.com/final-form/react-final-form#submission-errors
 */

const SubmitErrorAlerts = ({ submitError }) => (
  <React.Fragment>
    {// If submit errors, display them in alerts
    submitError
      ? map(submitError, (errorMsg, index) => (
          <Alert key={`errorAlert-${index}`} color="danger">
            {errorMsg}
          </Alert>
        ))
      : null}
  </React.Fragment>
)

export default SubmitErrorAlerts
