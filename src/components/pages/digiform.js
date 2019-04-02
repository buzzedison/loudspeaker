import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Boot from "./bootcamp.png";

class DigiForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }
  render() {
    const { validated } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={12} className="digihead">
              <h2>Digital Marketing BootCamp 2019</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Form
                name="bootcamp"
                method="POST"
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <Form.Group controlId="formfirstname">
                  <Form.Control placeholder="First name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a first name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formlastname">
                  <Form.Control placeholder="Last name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a last name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />{" "}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    <strong>Why do you want to attend the bootcamp? </strong>
                  </Form.Label>
                  <Form.Control as="textarea" rows="3" required />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  Please tell us why you want to attend the boot camp.
                </Form.Control.Feedback>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col sm className="bootimage">
              <img src={Boot} alt="bootcamp" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DigiForm;
