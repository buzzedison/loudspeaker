import React, { Component } from "react";
import { Row, Col, Container, Button, Card, Nav } from "react-bootstrap";
import Styles from "./sectionb";
import { NavLink } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <mysection>
        <Container>
          <Row className="Sectionrow">
            <Col sm={6} className="sectioncol">
              <Styles />
            </Col>
            <Col sm={6} className="sectioncol2">
              <Card className="cardmarket">
                <Card.Header as="h3" className="dm">
                  Digital Marketing BootCamp
                </Card.Header>
                <Card.Body>
                  <Card.Title>Social media intensive training</Card.Title>
                  <Card.Text>
                    Practical demonstration, work with real brands. Learn how to
                    make money with digital tools. Job interviews for successful
                    candidates
                  </Card.Text>
                  <Nav>
                    <NavLink to="/bootcamp_form">
                      <Button variant="primary">Sign up now</Button>
                    </NavLink>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </mysection>
    );
  }
}

export default Section;
