import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import classes from "./Testimonials.module.css";
import Slides from "./Slides";

const Testimonials = () => {
  return (
    <section className={`${classes.testimonials}`} id="testimonials">
      <Container>
        <div className={`${classes.testi__wrapper}`}>
          <Row>
            <Col lg="4" md="6">
              <div className={`${classes.testi__title__wrapper}`}>
                <h5 className="sub__title">testimonials</h5>
                <h2 className="">
                  What do
                  <br /> my <span className="text__main">Clients</span> say
                  <br /> about Me..?
                </h2>
              </div>
            </Col>
            <Col lg="8" md="6">
              <Slides />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
