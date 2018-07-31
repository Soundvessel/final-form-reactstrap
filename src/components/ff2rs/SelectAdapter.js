/*
  Created by g@coplex.com on 05/04/2018

  Final-Form adapter for Input Reactstrap component
  https://github.com/final-form/react-final-form#third-party-components
*/

import React from 'react'
import { Input } from 'reactstrap'

const SelectAdapter = ({
  input,
  multiple,
  options,
  meta,
  placeholder = 'Select...',
  invalid = meta => meta.touched && meta.invalid,
  valid = () => false,
  ...rest
}) => (
  <Input
    {...input}
    invalid={invalid(meta)}
    valid={valid(meta)}
    // className to style placeholder when not multiple
    className={!input.value ? 'is-placeholder' : null}
    multiple={multiple}
    // empty multiple must be empty array for final-form
    value={!input.value && multiple ? [] : input.value}
    {...rest}
  >
    {placeholder && (
      <option className="is-placeholder" disabled value="">
        {placeholder}
      </option>
    )}
    {options[0].hasOwnProperty('groupOptions')
      ? /* options have groups */
        options.map((group, groupIndex) => (
          <optgroup label={group.label} key={groupIndex}>
            {group.groupOptions.map((option, optionIndex) => (
              <option key={`${groupIndex}-${optionIndex}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))
      : /* options don't have groups */
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
  </Input>
)

export default SelectAdapter

// @todo -- new data format see ExampleForm food data

// @todo -- apply SASS Placeholder text color with .is-placeholder class

// @todo -- prop-types
