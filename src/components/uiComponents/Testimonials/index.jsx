import React from "react";
import { Container, Row, Col } from "reactstrap";

import classes from "./Testimonials.module.css";
import Slides from "./Slides";
import ScrollAnimation from "../ScrollAnimation";

const Testimonials = () => {
  return (
    <section className={`${classes.testimonials}`} id="testimonials">
      <Container>
        <div className={`${classes.testi__wrapper}`}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg="4" md="6">
              <ScrollAnimation animate="fade-up" delay="200" duration="200">
                <div className={`${classes.testi__title__wrapper}`}>
                  <h5 className="sub__title">testimonials</h5>
                  <h2 className="">
                    <span className="text__main">Clients</span> reviews
                  </h2>
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg="8" md="6">
              <ScrollAnimation animate="fade-up" delay="250" duration="250">
                <Slides />
              </ScrollAnimation>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
