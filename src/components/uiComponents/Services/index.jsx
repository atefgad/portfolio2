import React from "react";
import { Container, Row, Col } from "reactstrap";

import ServicesItem from "./ServicesItem";
import ScrollAnimation from "../ScrollAnimation";
import classes from "./Services.module.css";

// const services = [
//   {
//     id: 1,
//     title: "Web Development",
//     icon: "ri-computer-line",
//   },
//   {
//     id: 2,
//     title: "WordPress Development",
//     icon: "ri-apps-line",
//   },
//   {
//     id: 3,
//     title: "Full-Stack Development",
//     icon: "ri-code-s-slash-line",
//   },
// ];

const Services = () => {
  return (
    <section className={`${classes.sevices}`} id="sevices">
      <Container>
        <Row className="align-items-center">
          <Col md="4">
            <ScrollAnimation animate="fade-up" delay="150" duration="150">
              <h4 className="sub__title">What I can do..?!</h4>
              <h2>
                Services provide
                <br />
                for you.
              </h2>
            </ScrollAnimation>
          </Col>
          <Col md="8">
            <div className={`${classes.services__container}`}>
              <ScrollAnimation animate="fade-up" delay="200" duration="200">
                <ServicesItem
                  title="Web Development"
                  icon="ri-code-s-slash-line"
                />
              </ScrollAnimation>
              <div>
                <ScrollAnimation animate="fade-up" delay="250" duration="200">
                  <ServicesItem title="Ui/Ux Design" icon="ri-layout-3-line" />
                </ScrollAnimation>

                <ScrollAnimation animate="fade-up" delay="200" duration="200">
                  <ServicesItem title="Marketing" icon="ri-lightbulb-fill" />
                </ScrollAnimation>
              </div>

              <ScrollAnimation animate="fade-up" delay="250" duration="200">
                <ServicesItem
                  title="Wordpress Development"
                  icon="ri-code-box-line"
                />
              </ScrollAnimation>
            </div>
          </Col>
        </Row>

        <div className="icons__shapes">
          <span className="reactjs">
            <ScrollAnimation animate="fade-up" delay="200" duration="200">
              <img src="/images/icons/react.svg" alt="bootstrap" />
            </ScrollAnimation>
          </span>
          <span className="bootstrap">
            <ScrollAnimation animate="fade-up" delay="250" duration="200">
              <img src="/images/icons/bootstrap.svg" alt="bootstrap" />
            </ScrollAnimation>
          </span>
          <span className="sass">
            <ScrollAnimation animate="fade-up" delay="200" duration="200">
              <img src="/images/icons/sass.svg" alt="bootstrap" />
            </ScrollAnimation>
          </span>
          <span className="html5">
            <ScrollAnimation animate="fade-up" delay="300" duration="200">
              <img src="/images/icons/html5.svg" alt="bootstrap" />
            </ScrollAnimation>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Services;
