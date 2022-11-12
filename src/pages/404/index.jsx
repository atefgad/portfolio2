import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Icon404 from "./Icon404";

const Page404 = () => {
  return (
    <Container>
      <div className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col lg="" md="6">
            <h1 className="mb-3 mt-0">page not found</h1>
            <p className="mb-4 mt-1 fs-5">Uh-oh, Something Went Wrong</p>
            <Link to="/" className="d-inline-flex fs-6 btn btn-outline-primary">
              <i class="ri-arrow-left-line "></i> Bake to Home
            </Link>
          </Col>
          <Col lg="" md="6">
            <Icon404 />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Page404;
