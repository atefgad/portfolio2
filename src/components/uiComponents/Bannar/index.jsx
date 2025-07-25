import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import ScrollAnimation from "../ScrollAnimation";
import Shapes from "../Shapes";

import classes from "./Bannar.module.css";

const Bannar = ({ title, subtitle }) => {
  return (
    <div className={`${classes.cta__wrap}`}>
      <Container>
        <div className="wraper__content">
          <ScrollAnimation animate="fade-up" delay="200" duration="200">
            <h2 className={`${classes.cta__title}`}>{title}</h2>
            {subtitle ? (
              <p className={`${classes.cta__text}`}>{subtitle}</p>
            ) : null}
          </ScrollAnimation>

          <ScrollAnimation animate="fade-up" delay="250" duration="250">
            <Link
              className={`btn btn-primary btn-lg ${classes.cta__btn}`}
              to="/contact"
            >
              Contact Me
            </Link>
          </ScrollAnimation>
        </div>
      </Container>
      <Shapes />
    </div>
  );
};

export default Bannar;
