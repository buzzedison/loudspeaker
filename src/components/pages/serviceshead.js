import React, { Component } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import SocialImage from "./social.png";
import BrandingImage from "./branding.png";
import ResearchImage from "./research.png";

class ServicesHead extends Component {
  render() {
    return (
      <sectionhead>
        <Container>
          <Row>
            <Col lg={12}>
              <h3> SERVICES BRIEF</h3>
              <p>
                <strong>WE THINK OUTSIDE THE BOX.</strong>... At the heart of
                every journey is the power to shake things up...
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={SocialImage} />
                <Card.Body>
                  <Card.Title>
                    <strong>Social Media</strong>
                  </Card.Title>
                  <Card.Text>
                    Getting results for Small and medium scale enterprises since
                    2015.
                  </Card.Text>
                  <Button variant="warning">Find out more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={BrandingImage} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <strong>Branding </strong>
                  </Card.Title>
                  <Card.Text>
                    In a nutshell, we can make your company look so good. We can
                    make you look the path
                  </Card.Text>
                  <Button variant="warning">Find out more</Button>
                </Card.Body>
              </Card>
              <p>..</p>
            </Col>

            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={ResearchImage} />
                <Card.Body>
                  <Card.Title>
                    <strong>Market Resarch</strong>
                  </Card.Title>
                  <Card.Text>
                    Deep insights, Market Research and development excellence.
                  </Card.Text>
                  <Button variant="warning">Let's do this!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </sectionhead>
    );
  }
}

export default ServicesHead;
