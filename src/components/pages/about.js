import React, { Component } from "react";
import { Row, Col, Container, Card, CardColumns } from "react-bootstrap";
import Justfresh from "./justfresh.png";
import Spriggs from "./spriggs.png";
import Wecode from "./codewit.png";
import Voyager from "./voyager.png";
import Flair from "./flair.png";
import Floral from "./floral.png";
import Bloop from "./bloop.png";

class About extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col m={6} className="abouta">
            <h2>A Full Service 360 Degree Branding and Advertising Agency</h2>
          </Col>
          <Col m={6} className="aboutb">
            <h3>
              We work hard, everyday, to help brands reach their full potential.
            </h3>
            <CardColumns>
              <Card>
                <Card.Img variant="top" src={Flair} />
                <Card.Body>
                  <Card.Title>
                    <strong>Flair Catering Social Media Since 2015</strong>
                  </Card.Title>
                  <Card.Text>
                    We get results. It doesn't take much to set a trend. But it
                    takes vision to define one that others follow
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    A good creative is not just good business; it's the human
                    touch that brings people together.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Loudspeaker Digital <cite title="Source Title">.</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Img variant="top" src={Justfresh} />
                <Card.Body>
                  <Card.Title>
                    <strong>Branding for Just Fresh</strong>{" "}
                  </Card.Title>
                  <Card.Text>
                    Logo design, social media, printing, t-shirt design,
                    photoshoot, content creation{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Voyager} />
                <Card.Body>
                  <Card.Title>
                    <strong>Corporate training for Voyager Royale</strong>
                  </Card.Title>
                  <Card.Text>
                    Digital Marketing Training covering all aspects of digital
                    marketing, design and conversion optimization strategies
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Spriggs} />
                <Card.Body>
                  <Card.Title>
                    <strong>Branding and packaging design for SPRIGGS</strong>
                  </Card.Title>
                  <Card.Text>
                    From conceptualizing, to protoyping and actual design and
                    print of product packaging.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img src={Bloop} />
              </Card>
              <Card>
                <Card.Img variant="top" src={Wecode} />
                <Card.Body>
                  <Card.Title>
                    <strong>T-shirt design for Codewit</strong>
                  </Card.Title>
                  <Card.Text>
                    Supporting Codewit's fundraising campaign with the t-shirt
                    design and printing.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Floral} />
                <Card.Body>
                  <Card.Title>
                    <strong>Executive training for Unique Floral</strong>
                  </Card.Title>
                  <Card.Text>
                    5 days of social media and design training for senior staff
                    of Unique floral.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
            ;
          </Col>
        </Row>{" "}
      </Container>
    );
  }
}

export default About;
