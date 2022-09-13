import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import classes from "./Bannar.module.css";

const Bannar = ({ title, subtitle }) => {
  return (
    <div className={`${classes.bannar}`}>
      <Container>
        <Row className="align-items-center">
          <Col lg="3" md="4">
            <div className={`${classes.left__info}`}>
              <h2 className={`${classes.b__title}`}>{title}</h2>
            </div>
          </Col>
          <Col lg="9" md="8">
            <div className={`${classes.right__info} d-flex align-items-center`}>
              <div className={`${classes.text__content}`}>
                <p>
                  {subtitle} <br />
                  Please <Link to="/contact">Contact Me?</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bannar;
