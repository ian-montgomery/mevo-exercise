import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div id="footer">
      <Container >
        <Row>
          <Col md={4} sm={12}>
          <div>
            <h4>wellington</h4>
            <li>
              <a>Vehicles</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Term and Conditions</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>product</h4>
            <li>
              <a>The Mevo App </a>
            </li>
            <li>
              <a>Climate Positive</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>company</h4>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer
