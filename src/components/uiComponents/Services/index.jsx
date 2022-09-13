import React from "react";
import { Container, Row, Col } from "reactstrap";

import ServicesItem from "./ServicesItem";
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
            <h4 className="sub__title">What I can do..?!</h4>
            <h2>
              Services provide
              <br />
              for you.
            </h2>
          </Col>
          <Col md="8">
            <div className={`${classes.services__container}`}>
              <ServicesItem
                title="Web Development"
                icon="ri-code-s-slash-line"
              />
              <div>
                <ServicesItem title="Business Stratagy" icon="ri-pulse-fill" />

                <ServicesItem
                  title="Marketing & Reporting"
                  icon="ri-lightbulb-fill"
                />
              </div>

              <ServicesItem
                title="Wordpress Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>
        </Row>

        <div className="icons__shapes">
          <span className="reactjs">
            <img src="/images/icons/react.svg" alt="bootstrap" />
          </span>
          <span className="bootstrap">
            <img src="/images/icons/bootstrap.svg" alt="bootstrap" />
          </span>
          <span className="sass">
            <img src="/images/icons/sass.svg" alt="bootstrap" />
          </span>
          <span className="html5">
            <img src="/images/icons/html5.svg" alt="bootstrap" />
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Services;
