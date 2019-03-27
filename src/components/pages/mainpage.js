import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class MainPage extends Component {
  render() {
    return (
      <mainpage>
        <Container fluid>
          <Row>
            <Col sm={12} className="smallhead">
              <smallhead>
                Get our Content Marketing Strategy for 2019/2020
                <Button className="mainButton"> Access now</Button>
              </smallhead>
            </Col>
          </Row>
        </Container>
      </mainpage>
    );
  }
}

export default MainPage;
