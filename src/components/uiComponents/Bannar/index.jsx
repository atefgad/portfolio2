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

          <p className={`${classes.cta__text}`}>{subtitle}</p>
          <Link className={`btn btn-default ${classes.cta__btn}`} to="/contact">
            <i className="ri-phone-line"></i> Request a Quote
          </Link>
        </div>
      </Container>
      <Shapes />
    </div>
  );
};

export default Bannar;
