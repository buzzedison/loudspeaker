import React, { Component } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

class Section extends Component {
  render() {
    return (
      <mysection>
        <Container>
          <Row className="Sectionrow">
            <Col sm={6} className="sectioncol">
              ll
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
                  <Button variant="primary">Sign up now</Button>
                </Card.Body>
              </Card>
              ;
            </Col>
          </Row>
        </Container>
      </mysection>
    );
  }
}

export default Section;
