import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../ProjectCard";

import classes from "./Top.module.css";

const projects = [
  {
    id: "1",
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
    id: "2",
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
  {
    id: "3",
    title: "Erlebnisreisen Agypten | travel agency",
    client: "other",
    category: "WordPress",
    img: [
      "/images/projects/p3/p3-1.webp",
      "/images/projects/p3/p3-2.webp",
      "/images/projects/p3/p3-3.webp",
    ],
    keyword: ["WordPress", "Bootstrap", "Html5", "Css3"],
    liveUrl: "https://erlebnisreisen-eg.com/",
  },
];

const TopProjects = () => {
  return (
    <div className={`${classes.top3}`} id="TopProjects">
      <Container fluid>
        <div className="d-flex justify-content-around align-items-center mt-sm-3">
          <h3 className="ms-md-5">Top 3 Projects I've Built</h3>
          <Link to="/projects/all" className="ms-sm-3 p-0">
            <span className="title-link fw-bold position-relative">
              see all <i className="ri-arrow-right-line"></i>
            </span>
          </Link>
        </div>

        <Row className="px-md-5">
          {projects.map((item, index) => (
            <Col md="6" lg="4" key={index}>
              <ProjectCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopProjects;
