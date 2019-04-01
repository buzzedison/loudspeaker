import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Boot from "./bootcamp.png";
import { NavLink } from "react-router-dom";

class BootCamp extends Component {
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
            <Col sm className="digitext">
              <h3>
                <strong>
                  Mentored by experienced industry professionals, come learn
                  Digital Marketing while building a professional portfolio of
                  real client projects.
                </strong>
              </h3>
              <p>
                You will get an indept understanding of the primary tools in the
                digital marketer’s toolbox, and easy-to-use frameworks for
                developing strategies and plans for your organization. The
                course cuts through the clutter of confusing digital jargon and
                buzzwords, and focuses on the strategic principles of digital
                marketing. The class size is limited to facilitate interactive
                activities, group discussion, and opportunities for networking.{" "}
              </p>

              <p>
                The BootCamp will cover all of today’s core industry skills in
                digital marketing including social media, search engine
                optimization, analytics, advertising and content marketing.
                You’ll work directly with an experienced team of industry
                professionals, learning by creating and pitching digital
                marketing strategies for real clients, in an agency-style
                environment.
              </p>
              <NavLink to="/bootcamp_form">
                <Button size="lg">Apply Now!</Button>
              </NavLink>
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

export default BootCamp;
