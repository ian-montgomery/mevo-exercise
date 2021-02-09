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
              <a href="https://mevo.co.nz/wellington/vehicles">Vehicles</a>
            </li>
            <li>
              <a href="https://mevo.co.nz/wellington/pricing">Pricing</a>
            </li>
            <li>
              <a href="https://mevo.co.nz/wellington/terms-and-conditions">Term and Conditions</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>product</h4>
            <li>
              <a href="https://mevo.co.nz/app">The Mevo App </a>
            </li>
            <li>
              <a href="https://mevo.co.nz/climate-positive">Climate Positive</a>
            </li>
            <li>
              <a href="https://mevo.co.nz/faq">FAQs</a>
            </li>
          </div>
          </Col>
          <Col md={4} sm={12}>
          <div>
            <h4>company</h4>
            <li>
              <a href="https://mevo.co.nz/team">Team</a>
            </li>
            <li>
              <a href="https://mevo.co.nz/press">Press</a>
            </li>
            <li>
              <a href="https://mevo.co.nz/contact">Contact</a>
            </li>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer
