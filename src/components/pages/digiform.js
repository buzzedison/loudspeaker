import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Boot from "./bootcamp.png";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class DigiForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", email: "", message: "" };

    this.state = { validated: false };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "bootcamp", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }
  render() {
    const { firstname, lastname, email, message, validated } = this.state;
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
                action="/success"
                data-netlify="true"
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group controlId="formfirstname">
                  <Form.Control
                    name="firstname"
                    placeholder="First name"
                    value={firstname}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a first name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formlastname">
                  <Form.Control
                    name="lastname"
                    placeholder="Last name"
                    value={lastname}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a last name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
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
                  <Form.Label>
                    <strong>Why do you want to attend the bootcamp? </strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    required
                  />
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
