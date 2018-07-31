import React from 'react'
import { Form } from 'react-final-form'
import uniqueId from 'react-html-id'
import { includes } from 'lodash'
import { FORM_ERROR } from 'final-form'
import ExampleForm from './ExampleForm'

const optionsFoodsUngrouped = [
  {
    label: 'Apples',
    value: 'apples'
  },
  {
    label: 'Oranges',
    value: 'oranges'
  },
  {
    label: 'Butter',
    value: 'butter'
  },
  {
    label: 'Milk',
    value: 'milk'
  },
  {
    label: 'Pizza',
    value: 'pizza'
  },
  {
    label: 'Ice Cream',
    value: 'icecream'
  }
]

const optionsFoodsGrouped = [
  {
    label: 'Produce',
    groupOptions: [
      {
        label: 'Apples',
        value: 'apples'
      },
      {
        label: 'Oranges',
        value: 'oranges'
      }
    ]
  },
  {
    label: 'Dairy',
    groupOptions: [
      {
        label: 'Butter',
        value: 'butter'
      },
      {
        label: 'Milk',
        value: 'milk'
      }
    ]
  },
  {
    label: 'Frozen Food',
    groupOptions: [
      {
        label: 'Pizza',
        value: 'pizza'
      },
      {
        label: 'Ice Cream',
        value: 'icecream'
      }
    ]
  }
]

const optionsFoods = optionsFoodsGrouped

// simulate submission

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  // simulate server response delay
  await sleep(300)

  /*
    This technique allows for the building of an error object
    instead of immediately returning on first error.
  */

  // setup formErrors object
  let formErrors = { [FORM_ERROR]: [] }

  // form error condition that adds field and form level errors
  if (includes(values.checkboxes, 'two')) {
    // field errors are added by adding message with key of field name and will display under field
    formErrors['checkboxes'] = 'This selection created a submission error.'
    // form error alerts are pushed to [FORM_ERROR] array
    formErrors[FORM_ERROR].push(
      'You clicked a checkbox above that triggered a submission error.'
    )
    formErrors[FORM_ERROR].push('Testing multiple submission errors.')
  }

  // if errors, return them
  if (Object.keys(formErrors).length > 1 || formErrors[FORM_ERROR].length > 0) {
    return formErrors
  }

  // else, no errors, show submitted data
  window.alert(JSON.stringify(values, 0, 2))
}

// Example Form with initial values

class ExampleFormContainer extends React.Component {
  // inject react-html-id for use in component
  constructor() {
    super()
    uniqueId.enableUniqueIds(this)
  }

  /*
    Setup and select data

    Try commenting out lines of initial data here to test entry and field level validation.
  */
  state = { data: {} }
  async componentDidMount() {
    let data = {
      // comment in/out as you please
      email: 'test@test.com',
      //password: '12345678',
      desc: 'This is a saved description.',
      confirm: true,
      checkboxes: ['two'],
      radios: 'three',
      age: 47,
      state: 'ME',
      //favfood: 'pizza',
      hatefoods: ['apples', 'milk']
    }
    this.setState({ data })
  }

  render() {
    // Create unique formID for label/input for/id attribute pairs
    const formID = this.nextUniqueId()

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={this.state.data}
        /**
         * @see https://github.com/final-form/react-final-form#-performance-optimization-through-subscriptions-
         */
        subscription={{
          hasSubmitErrors: true,
          hasValidationErrors: true,
          pristine: true,
          submitError: true,
          submitFailed: true,
          submitting: true
        }} // Subscription Performance Optimization
        component={ExampleForm}
        formID={formID}
        optionsFoods={optionsFoods} // dynamic options pass through container lile this
      />
    )
  }
}

export default ExampleFormContainer
