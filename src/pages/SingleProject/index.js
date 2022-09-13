import { Container, Row, Col } from "reactstrap";

import classes from "./SingleProject.module.css";

import { motion } from "framer-motion";
import Bannar from "../../components/uiComponents/Bannar";
import { useParams } from "react-router-dom";

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

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      className={`${classes.project__details}`}
    >
      <Container>
        <div className="mb-5">
          <h1>{getProject.title}</h1>
          <h6 className="text__main ms-4">{getProject.category}</h6>
          <hr className="hr text-light mt-4" />
        </div>
        <Row className="align-items-center">
          {/* Thum[IMG] */}
          <Col lg="8" md="6">
            <img
              src={getProject.img[0]}
              alt={"atef gad - " + getProject.title}
              className={`${classes.main__preview__img}`}
            />
          </Col>
          <Col lg="4" md="6">
            <div className="text-md-center pt-md-0 pt-sm-5">
              <h2 className="sub__title">Project Details</h2>
            </div>
            <Row className="mt-5 align-items-center">
              <Col lg="4" md="5">
                <h3>Client:</h3>
              </Col>
              <Col lg="8" md="7">
                <p>{getProject.client}</p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg="4" md="5">
                <h4>Tools:</h4>
              </Col>
              <Col lg="8" md="7">
                <p>{getProject.keyword.join(" - ")}</p>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <a
                className="btn btn-outline-primary w-50"
                href={getProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="hr text-light mt-5" />

      {/* Large Image */}
      <div className={`${classes.image__Preview}`}>
        <img
          src={getProject.img[1]}
          alt={"atef gad - " + getProject.title}
          height={992}
        />
      </div>

      {/* gallery Images */}
      {getProject.img.length > 1 && (
        <div className={`${classes.gallery__images}`}>
          <Container>
            <Row>
              {getProject.img.map((item, index) => (
                <Col lg="4" md="6" key={index}>
                  <div>
                    <img
                      src={item}
                      alt={"atef gad - " + getProject.title}
                      height={600}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
      <Bannar title="Create Your Future!" subtitle="Do you want a website?" />
    </motion.div>
  );
};

export default SingleProject;
