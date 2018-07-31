/*
  Created by g@coplex.com on 05/04/2018

  Final-Form adapter for Input Reactstrap component
  https://github.com/final-form/react-final-form#third-party-components
*/

import React from 'react'
import { Input } from 'reactstrap'

const InputAdapter = ({
  input,
  meta,
  invalid = meta => meta.touched && meta.invalid,
  valid = () => false, // @todo discuss with design having off by default?
  ...rest
}) => <Input {...input} {...rest} invalid={invalid(meta)} valid={valid(meta)} />

export default InputAdapter

// @todo -- prop-types
