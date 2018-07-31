/*
  Created by g@coplex.com on 05/04/2018

  Final-Form adapter for FormFeedback error Reactstrap component
  https://github.com/final-form/react-final-form#independent-error-component

  Display is toggled by the invalid prop on the Reactstrap form element placed above in the DOM.
  Custom component with display logic is therefore needed if you want error in non-standard place in DOM.
*/

import React from 'react'
import { Field } from 'react-final-form'
import { FormFeedback } from 'reactstrap'

const FormFeedbackAdapter = ({ name }) => (
  <Field
    name={name}
    subscription={{ error: true, submitError: true }}
    render={({ meta: { error, submitError } }) =>
      (error || submitError) ? <FormFeedback>{error || submitError}</FormFeedback> : null
    }
  />
)

export default FormFeedbackAdapter
