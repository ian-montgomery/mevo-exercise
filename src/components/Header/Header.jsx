import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import "../Header/Header.css";

const Header = () => {

  return (
    <div id="header" >
      <Container >
        <Row>
        <Col md={6} sm={12}>
            <Fade
              left
              duration={1000}
              delay={300}
              distance="30px"
            >
              <img
                src="https://assets.mevo.co.nz/brand/logo-brand.svg"
                alt="Mevo logo"
              />
            </Fade>
            <Fade
              left
              duration={1000}
              delay={1200}
              distance="30px"
            >
              <h1 className="welcome">let's find a car</h1>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              right
              duration={1000}
              delay={1800}
              distance="30px"
            >
              <img src="https://d1qmdf3vop2l07.cloudfront.net/vermilion-grape.cloudvent.net/compressed/_min_/fabfd50e0eea6dc6786bde6c7aebfd10.png" alt="Audi" className="car-image" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
