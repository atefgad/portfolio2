import { Container, Row, Col } from "reactstrap";

import classes from "./SingleProject.module.css";

import { motion } from "framer-motion";
import Bannar from "../../components/uiComponents/Bannar";
import { useParams } from "react-router-dom";
import ProjectCard from "../../components/uiComponents/ProjectCard";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
  exit: { opacity: 0, y: 0 },
};

const SingleProject = ({ projects }) => {
  const { projectId } = useParams();

  const getProject = projects.find((item) => {
    return item.id === projectId;
  });

  const getProjectsByCategory = projects.filter((project) => {
    return (
      project.category === getProject.category && project.id !== getProject.id
    );
  });

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      className={`${classes.single__project}`}
    >
      <Container>
        <Row
          className="mt-5 align-items-center justify-content-between
"
        >
          {/* project Heading /Start */}
          <Col lg="8" className="prject__heading">
            <h6 className="text__main badge rounded-pill bg-light">
              {getProject.category}
            </h6>
            <h1>{getProject.title}</h1>
            <div className="align-items-center">
              <p>
                <span className="text__main font-weight-bold">
                  <b>const</b>
                </span>{" "}
                <i>technologies </i> =<span className="text__main"> [</span>{" "}
                {getProject.keyword.join(" , ")}{" "}
                <span className="text__main">]</span>;
              </p>
            </div>
          </Col>
          {/* Live Preview */}
          <Col lg="4">
            {/* 
            <div className="text-md-center pt-md-0 pt-sm-5 mb-5 ">
              <h2 className="sub__title">Project Details</h2>
            </div>
            */}

            <div className="text-lg-center">
              <a
                className="btn btn-outline-primary w-50"
                href={getProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
              </a>
              <p className="mb-0 mt-2">
                <small
                  className="mt-0 d-block"
                  style={{ marginBottom: "-5px" }}
                >
                  Client Feedback:{" "}
                </small>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </p>
            </div>
          </Col>
          {/* Live Preview /End */}

          <hr className="hr text-light mt-4 mb-5" />
        </Row>
        <Row className="align-items-center">
          {/* Thum[IMG] */}
          <Col lg="12" md="12">
            <img
              src={getProject.img[0]}
              alt={"atef gad - " + getProject.title}
              className={`${classes.main__preview__img}`}
            />
          </Col>
        </Row>
      </Container>

      <hr className="hr text-light mt-5" />

      {/* Large Image */}
      <div className={`${classes.image__Preview} mb-5 mt-3`}>
        <img
          src={getProject.img[1]}
          alt={"atef gad - " + getProject.title}
          height={992}
        />
      </div>

      {/* Bannar */}
      <Bannar
        title="I can bring your idea to life!"
        subtitle="Please provide some information about your task and after checking the details, I will send you email to schedule a call or chat.

"
      />

      {/* Related Work */}
      {getProjectsByCategory.length > 1 ? (
        <Container className="my-5 ">
          <div>
            <h2 className="sub__title text-light">Related Work</h2>
            <Row>
              {getProjectsByCategory.map((item, index) => (
                <Col md="6" lg="4" key={index}>
                  <ProjectCard item={item} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      ) : null}
    </motion.div>
  );
};

export default SingleProject;
