import React from 'react'
import { Field, FormSpy } from 'react-final-form'
import {
  Alert,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Row
} from 'reactstrap'
import { map } from 'lodash'
import {
  validateRequired,
  validateEmail,
  validateIsNumber,
  validateMinLength,
  validateMaxLength,
  validateAbove18,
  validateIsThree,
  validateMatch,
  composeValidators
} from '../lib/validators'
import { FormFeedbackAdapter, InputAdapter, SelectAdapter } from './ff2rs'

import optionsStates from '../data/states'

const ExampleForm = ({
  formID,
  handleSubmit,
  hasSubmitErrors,
  hasValidationErrors,
  optionsFoods,
  meta,
  reset,
  pristine,
  submitError,
  submitFailed,
  submitting,
  values,
  ...rest
}) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label htmlFor={`${formID}-email`}>Email</Label>
      <Field
        name="email"
        component={InputAdapter}
        validate={composeValidators(validateRequired(), validateEmail())}
        valid={meta => meta.visited && meta.valid} // Override to enable valid highlighting condition
        // Passed to Reactstrap Component
        id={`${formID}-email`}
        aria-describedby={`${formID}-email-help`}
        bsSize="lg"
        type="email"
        placeholder="Your Email Address"
      />
      {/*
              Use the FormFeedbackAdapter for errors fed by synchronous field-Level validation.
              Use FormFeedback components for additional error message reguardless of error type etc.
              Use FormFeedback components with valid for universal success messages on valid input.
              Note FormFeedback display is based on valid/invalid props on field.
              Use FormText for static helper text. Be sure to provide an id/aria-describedby with the input.
            */}
      <FormFeedbackAdapter name="email" />
      <FormFeedback>Universal extra error status helper text</FormFeedback>
      <FormFeedback valid>
        Universal success (valid) status helper text.
      </FormFeedback>
      <FormText id={`${formID}-email-help`}>
        This is static helper text.
      </FormText>
    </FormGroup>
    <FormGroup>
      <Label htmlFor={`${formID}-password`}>Password</Label>
      <Field
        name="password"
        component={InputAdapter}
        validate={composeValidators(
          validateRequired(),
          validateMinLength(
            8,
            <React.Fragment>
              Your password must be at least <strong>8</strong> characters long.
            </React.Fragment>
          )
        )}
        // Passed to Reactstrap Component
        id={`${formID}-password`}
        invalid={meta =>
          meta.invalid && ((meta.visited && !meta.pristine) || meta.touched)
        } // override to validate during input
        placeholder="Your Password"
        bsSize="lg"
        type="password"
      />
      <FormFeedbackAdapter name="password" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor={`${formID}-passwordConfirm`}>Confirm Password</Label>
      <Field
        name="passwordConfirm"
        component={InputAdapter}
        // Passed to Reactstrap Component
        id={`${formID}-passwordConfirm`}
        invalid={meta =>
          meta.invalid && ((meta.visited && !meta.pristine) || meta.touched)
        } // override to validate during input
        validate={composeValidators(
          validateRequired(),
          validateMatch('password', 'Passwords must match.')
        )}
        placeholder="Confirm Password"
        bsSize="lg"
        type="password"
      />
      <FormFeedbackAdapter name="passwordConfirm" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor={`${formID}-desc`}>Description</Label>
      <Field
        name="desc"
        component={InputAdapter}
        validate={validateRequired()}
        // Non-FieldProps Passed to Reactstrap Component
        type="textarea"
        id={`${formID}-desc`}
        rows="4"
        placeholder="Decribe something..."
      />
      <FormFeedbackAdapter name="desc" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor={`${formID}-file`}>File</Label>
      <Field
        name="file"
        component={InputAdapter}
        // Non-FieldProps Passed to Reactstrap Component
        type="file"
        id={`${formID}-file`}
      />
      <FormFeedbackAdapter name="file" />
    </FormGroup>
    <FormGroup check className="mb-4">
      <Field
        name="confirm"
        component={InputAdapter}
        validate={validateRequired('test')}
        // Non-FieldProps Passed to Reactstrap Component
        type="checkbox"
        id={`${formID}-confirm`}
      />
      <Label htmlFor={`${formID}-confirm`} check>
        Check this single checkbox
      </Label>
      {
        // Example where we don't use FormFeedbackAdapter
      }
      <FormFeedback>I said check this!</FormFeedback>
    </FormGroup>
    <FormGroup tag="fieldset">
      <legend>Checkboxes</legend>
      <FormGroup check>
        <Field
          name="checkboxes"
          component={InputAdapter}
          // checkbox/radio groups only need validation in first field of group? @todo
          validate={validateRequired()}
          value="one"
          // Non-FieldProps Passed to Reactstrap Component
          type="checkbox"
          id={`${formID}-checkboxes-1`}
        />
        <Label htmlFor={`${formID}-checkboxes-1`} check>
          One
        </Label>
      </FormGroup>
      <FormGroup check>
        <Field
          name="checkboxes"
          component={InputAdapter}
          // checkbox/radio groups only need validation in first field of group? @todo
          validate={validateRequired()}
          value="two"
          // Non-FieldProps Passed to Reactstrap Component
          type="checkbox"
          id={`${formID}-checkboxes-2`}
        />
        <Label htmlFor={`${formID}-checkboxes-2`} check>
          Two (check to test form submission error)
        </Label>
        {/* in groups of checkboxes/radio place feedback after last label */}
        <FormFeedbackAdapter name="checkboxes" />
      </FormGroup>
    </FormGroup>
    <FormGroup tag="fieldset">
      <legend>Radio Buttons (inline)</legend>
      <FormGroup check inline>
        <Field
          name="radios"
          component={InputAdapter}
          // checkbox/radio groups only need validation in first field of group? @todo
          validate={composeValidators(validateRequired(), validateIsThree)}
          value="one"
          // Non-FieldProps Passed to Reactstrap Component
          type="radio"
          id={`${formID}-radios-1`}
        />
        <Label htmlFor={`${formID}-radios-1`} check>
          One
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Field
          name="radios"
          component={InputAdapter}
          value="two"
          // Non-FieldProps Passed to Reactstrap Component
          type="radio"
          id={`${formID}-radios-2`}
        />
        <Label htmlFor={`${formID}-radios-2`} check>
          Two
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Field
          name="radios"
          component={InputAdapter}
          value="disabled"
          // Non-FieldProps Passed to Reactstrap Component
          type="radio"
          id={`${formID}-radios-disabled`}
          disabled
        />
        <Label htmlFor={`${formID}-radios-disabled`} check>
          Disabled
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Field
          name="radios"
          component={InputAdapter}
          value="three"
          // Non-FieldProps Passed to Reactstrap Component
          type="radio"
          id={`${formID}-radios-3`}
        />
        <Label htmlFor={`${formID}-radios-3`} check>
          Three?
        </Label>
      </FormGroup>
      {/* 
                  FormFeedback not adjacent and after input:invalid (like for these inline radios) requires custom implementation to force display.
                  Simply combine display logic with the display of the element and force the element display with the "d-block" utility class.
                */}
      <Field
        name="radios"
        subscription={{ touched: true, error: true, submitError: true }}
        render={({ meta: { touched, error, submitError } }) =>
          touched && (error || submitError) ? (
            <FormFeedback className="d-block">
              {error || submitError}
            </FormFeedback>
          ) : null
        }
      />
      <FormText>
        This radio group has an example of specialized error message placement.
      </FormText>
    </FormGroup>
    <Row>
      <Col sm={4}>
        <FormGroup>
          <Label htmlFor={`${formID}-age`}>Age</Label>
          <Field
            name="age"
            component={InputAdapter}
            validate={composeValidators(
              validateRequired(),
              validateIsNumber(),
              validateAbove18
            )}
            // Non-FieldProps Passed to Reactstrap Component
            id={`${formID}-age`}
            type="text"
            placeholder="Age"
          />
          <FormFeedbackAdapter name="age" />
        </FormGroup>
      </Col>
      <Col sm={8}>
        <FormGroup>
          <Label htmlFor={`${formID}-state`}>State</Label>
          <Field
            name="state"
            component={SelectAdapter}
            validate={validateRequired()}
            // Non-FieldProps Passed to Reactstrap Component
            type="select" // required if using SelectAdapter as component
            id={`${formID}-state`}
            placeholder="Select a State" // Override placeholder with string or use {false} to remove placeholder completely
            options={optionsStates}
          />
          <FormFeedbackAdapter name="state" />
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
      <Label htmlFor={`${formID}-favfood`}>Favorite Food</Label>
      <Field
        name="favfood"
        component={SelectAdapter}
        validate={validateRequired()}
        // Non-FieldProps Passed to Reactstrap Component
        type="select"
        id={`${formID}-favfood`}
        placeholder="Select your Favorite Food" // Override placeholder with string or use {false} to remove placeholder completely
        options={optionsFoods}
      />
      <FormFeedbackAdapter name="favfood" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor={`${formID}-hatefoods`}>Least Favorite Foods</Label>
      <Field
        name="hatefoods"
        component={SelectAdapter}
        validate={composeValidators(
          validateRequired(),
          validateMaxLength(3, 'You dislike too many things. Select only 3.')
        )}
        // Passed to Reactstrap Component
        type="select"
        multiple
        id={`${formID}-hatefoods`}
        placeholder="Select up to 3 Foods you Dislike" // Override placeholder with string or use {false} to remove placeholder completely
        options={optionsFoods}
        size="6"
      />
      <FormFeedbackAdapter name="hatefoods" />
    </FormGroup>
    {// Alert user of field-level client-side errors on submission attempt
    hasValidationErrors &&
      submitFailed && (
        <Alert color="danger">Please fix the above errors.</Alert>
      )}
    {// Submission Errors Alerts
    submitError &&
      map(submitError, (errorMsg, index) => (
        <Alert key={`${formID}-submitError-${index}`} color="danger">
          {errorMsg}
        </Alert>
      ))}
    <div className="pt-2 text-right">
      <Button
        type="button"
        color="link"
        onClick={reset}
        disabled={submitting || pristine}
        hidden={pristine}
        className="mr-3"
      >
        Reset
      </Button>
      <Button
        type="submit"
        size="lg"
        color="success"
        disabled={pristine || hasSubmitErrors || submitting}
        className="px-5"
      >
        Submit
      </Button>
    </div>
    {values ? (
      <pre>{JSON.stringify(values, 0, 2)}</pre>
    ) : (
      <FormSpy subscription={{ values: true }}>
        {({ values }) => (
          <pre className="border mt-3 mb-0 p-3">
            {JSON.stringify(values, 0, 2)}
          </pre>
        )}
      </FormSpy>
    )}
  </Form>
)

export default ExampleForm
