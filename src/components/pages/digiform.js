import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Boot from "./bootcamp.png";
import NetlifyForm from "react-netlify-form";

class DigiForm extends Component {
  render() {
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
              <NetlifyForm onSubmit={this.handleSubmit}>
                {({ loading, error, success }) => (
                  <div>
                    {loading && <div>Loading...</div>}
                    {error && (
                      <div>
                        Your information was not sent. Please try again later.
                      </div>
                    )}
                    {success && <div>Thank you for contacting us!</div>}
                    {!loading && !success && (
                      <div>
                        <Form.Group controlId="formfirstname">
                          <Form.Control
                            name="firstname"
                            placeholder="First name"
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
                            <strong>
                              Why do you want to attend the bootcamp?{" "}
                            </strong>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows="3"
                            name="message"
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
                      </div>
                    )}
                  </div>
                )}
              </NetlifyForm>
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
