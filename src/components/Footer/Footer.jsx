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
              <a href="#">Vehicles</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Term and Conditions</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>product</h4>
            <li>
              <a href="#">The Mevo App </a>
            </li>
            <li>
              <a href="#">Climate Positive</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>company</h4>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer
