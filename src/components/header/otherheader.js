import React, { Component } from "react";
import { Row, Col, Button, Card, Jumbotron } from "react-bootstrap";
import Background from "./slidera.png";

class OtherHeader extends Component {
  render() {
    return (
      <otherheader>
        <Jumbotron>
          <Row className="firstRow">
            <Col sm={12} className="firstcol">
              <Card className="bg-dark text-white">
                <Card.Img src={Background} alt="Slider" />
                <Card.ImgOverlay>
                  <Card.Text className="cardtext">
                    <h2>
                      Relentless edison focus on reaching your target customers with
                      your brand and stories
                    </h2>
                    <h4>
                      We find out what your customers or potential customers
                      want and show you how to deliver based on findings
                    </h4>
                    <p>
                      <Button className="HomeButton"> FIND OUT MORE</Button>
                    </p>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
      </otherheader>
    );
  }
}

export default OtherHeader;
