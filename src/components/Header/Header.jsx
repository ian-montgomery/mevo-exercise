import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import "../Header/Header.css";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="header" className="jumbotron">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              top={isMobile}
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
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1200}
              distance="30px"
            >
              <h1 className="welcome">Let's find a car.</h1>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              right={isDesktop}
              top={isMobile}
              duration={1000}
              delay={300}
              distance="30px"
            >
              <img src="https://d1qmdf3vop2l07.cloudfront.net/vermilion-grape.cloudvent.net/compressed/_min_/fabfd50e0eea6dc6786bde6c7aebfd10.png" alt="Audi" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
