import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../ProjectCard";

import { ScrollAnimation } from "../../index";

import classes from "./Top.module.css";

const projects = [
  {
    id: "1",
    title: "m2market - Furniture Store | E-commerce web app",
    client: "Frelance",
    category: "React.js",
    img: ["/images/projects/p8/p8-1.webp", "/images/projects/p8/p8-2.webp"],
    keyword: [
      "React.js",
      "Redux-toolkit",
      "Firebase-v9",
      "Framer motion",
      "Reactstrap",
    ],
    liveUrl: "https://m2market.atef-gad.com/",
  },
  {
    id: "2",
    title: "smarty shop | E-commerce React.js web app",
    client: "upWork client",
    category: "React.js",
    img: [
      "/images/projects/p1/p1-1.webp",
      "/images/projects/p1/p1-2.webp",
      "/images/projects/p1/p1-3.webp",
    ],
    keyword: ["React.js", "Redux", "Bootstrap"],
    liveUrl: "https://shop.atef-gad.com/",
  },
  {
    id: "3",
    title: "Foody | POS System Web App For Restaurant",
    client: "upWork client",
    category: "React.js",
    img: [
      "/images/projects/p2/p2-1.webp",
      "/images/projects/p2/p2-2.webp",
      "/images/projects/p2/p2-3.webp",
    ],
    keyword: ["React.js", "Redux", "Bootstrap", "Sass"],
    liveUrl: "https://foody.atef-gad.com/",
  },
];

const TopProjects = () => {
  return (
    <div className={`${classes.top3}`} id="TopProjects">
      <Container fluid>
        <ScrollAnimation animate="fade-up">
          <div className="d-flex justify-content-around align-items-center mt-sm-3">
            <h3 className="ms-md-5">Top 3 Projects I've Built</h3>
            <Link to="/projects/all" className="ms-sm-3 p-0">
              <span className="title-link fw-bold position-relative">
                see all <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </ScrollAnimation>

        <Row className="px-md-5">
          {projects.map((item, index) => (
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
