import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const References = () => (
  <ListGroup className="small">
    <ListGroupItem color="info" tag="h5">
      Tools &amp; References
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="http://getbootstrap.com/docs/4.1/getting-started/introduction/"
    >
      Bootstrap 4 Docs
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="http://reactstrap.github.io/components"
    >
      Reactstrap Docs
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="https://github.com/final-form/react-final-form"
    >
      React Final-Form
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="https://github.com/final-form/react-final-form#third-party-components"
    >
      React Final-Form Example: Third Party Components
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="https://github.com/final-form/react-final-form#independent-error-component"
    >
      React Final-Form Example: Reusable Independent Error Component
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="https://github.com/final-form/react-final-form#-performance-optimization-through-subscriptions-"
    >
      React Final-Form Example: Performance Optimization Through Subscriptions
    </ListGroupItem>
    <ListGroupItem
      action
      color="info"
      tag="a"
      target="_blank"
      href="https://github.com/final-form/react-final-form#synchronous-field-level-validation"
    >
      React Final-Form Example: Synchronous Field-Level Validation
    </ListGroupItem>
  </ListGroup>
)

export default References
