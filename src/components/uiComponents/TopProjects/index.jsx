import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../ProjectCard";

import { ScrollAnimation, ArrowDown } from "../../index";

import classes from "./Top.module.css";
import { projects } from "../../../data/main";

const TopProjects = () => {
  return (
    <div className={`${classes.top3}`} id="TopProjects">
      <Container>
        <ScrollAnimation animate="fade-up">
          <div className="d-flex justify-content-between align-items-center mt-sm-3">
            <h3 className=" text-capitalize">
              my latest works <ArrowDown />
            </h3>
            <Link to="/projects/all" className="ms-sm-3 p-0">
              <span className="title-link fw-bold position-relative">
                see all <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </ScrollAnimation>

        <Row className="mt-4">
          {projects.slice(0, 3).map((item, index) => (
            <Col md="6" lg="4" key={index}>
              <ScrollAnimation
                animate={index % 2 === 0 ? "fade-up" : "fade-down"}
                delay={index + 1 * 200}
                duration={index + 1 * 200}
              >
                <ProjectCard item={item} />
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopProjects;
