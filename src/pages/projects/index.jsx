import { Container, Row } from "reactstrap";
import { ProjectCard, ScrollAnimation } from "../../components";

import classes from "../../components/uiComponents/TopProjects/Top.module.css";

import { motion } from "framer-motion";

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

const Projects = ({ projects }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      className={`${classes.top3}`}
      id="projects"
    >
      <Container fluid>
        <div className="d-flex justify-content-around flex-column align-items-center mb-5">
          <h5 className="sub__title">My Portfolio</h5>
          <h3 className="ms-md-5">Projects I've Built</h3>
        </div>

        <Row className="px-md-5 d-flex justify-content-md-center">
          {projects.map((item, index) => (
            <motion.div
              className="col-lg-6 col-md-6 mb-5"
              key={index}
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ScrollAnimation
                animate={index % 2 === 0 ? "fade-up" : "fade-down"}
                delay={index + 1 * 200}
                duration={index + 1 * 200}
              >
                <ProjectCard item={item} />
              </ScrollAnimation>
            </motion.div>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Projects;
