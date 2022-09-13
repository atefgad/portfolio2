import { Container, Row, Col } from "reactstrap";
import classes from "./Contact.module.css";
import { Form } from "../../components";

import { motion } from "framer-motion";
import { socialLinks } from "../../data/main";

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

const Contact = () => {
  return (
    <motion.section
      variants={animations}
      initial="initial"
      animate="animate"
      className={`${classes.contact}`}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h4 className="sub__title mt-3">Contact me</h4>
            <h2 className="mb-4 fs-1">
              Don't hesitate to contact <br />{" "}
              <strong className="text__main">with me</strong>
            </h2>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <a href="#!">
                  <h6>Cairo - Egypt</h6>
                </a>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <a href="mailto:contact@atef-gad.com">
                  <h6>contact@atef-gad.com</h6>
                </a>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <a href="tel:0201017857849">
                  <h6>+0201017857849</h6>
                </a>
              </li>
            </ul>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>

        <div className={`${classes.social__ICONS} py-5`}>
          <Container>
            <h4 className="sub__title mb-3">Follow me</h4>
          </Container>
          <Row>
            {socialLinks.map((element, index) => (
              <Col lg="3" md="6" key={index}>
                <div className={`${classes.social__ICONS_item}`}>
                  <a
                    href={element.path}
                    target="_blank"
                    key={index}
                    rel="noreferrer"
                  >
                    <i className={element.icon}></i>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </motion.section>
  );
};

export default Contact;
