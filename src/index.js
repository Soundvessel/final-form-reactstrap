import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Row
} from 'reactstrap'
import ExampleFormContainer from './components/ExampleFormContainer'
import References from './components/References'

const App = () => (
  <Container className="py-5">
    <Row>
      <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <Card className="mb-5">
          <CardHeader tag="h5">Bootstrap 4 + Final-Form</CardHeader>
          <CardBody>
            <CardText>
              A combination of several Final-Form examples utilizing adapters
              for Reactstrap's Bootstrap 4 components.
            </CardText>
            <CardText>
              Find all the good stuff in{' '}
              <code>src/components/ExampleForm.js.</code>
            </CardText>
            <CardText>Tools &amp; references used after the form.</CardText>
            <ExampleFormContainer />
          </CardBody>
          <CardBody>
            <CardText tag="h5">Duplicate form for instance testing.</CardText>
            <ExampleFormContainer />
          </CardBody>
        </Card>
        <References />
      </Col>
    </Row>
  </Container>
)

render(<App />, document.getElementById('root'))
