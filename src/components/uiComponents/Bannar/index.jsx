import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Shapes from "../Shapes";

import classes from "./Bannar.module.css";

const Bannar = ({ title, subtitle }) => {
  return (
    <div className={`${classes.cta__wrap}`}>
      <Container>
        <div className="wraper__content">
          <h2 className={`${classes.cta__title}`}>{title}</h2>
          {subtitle ? (
            <p className={`${classes.cta__text}`}>{subtitle}</p>
          ) : null}

          <Link className={`btn btn-default ${classes.cta__btn}`} to="/contact">
            Contact Me
          </Link>
        </div>
      </Container>
      <Shapes />
    </div>
  );
};

export default Bannar;
