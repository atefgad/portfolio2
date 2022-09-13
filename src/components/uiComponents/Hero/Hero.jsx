import React from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "./Hero.module.css";
import { Shapes } from "../../../components";
import { socialLinks } from "../../../data/main";

const Hero = () => {
  return (
    <div className={`${classes.hero}`}>
      <Container className="custom-container">
        <Row>
          <Col md="6" className="order-2 order-md-1">
            <div className="text-md-start text-sm-center">
              <h2 className={`${classes.subtitle}`}>
                Hi, I'm <span>Atef</span>
              </h2>
              <h3 className={`${classes.name}`}>Frontend Developer</h3>
              <p className={`${classes.text}`}>
                A Freelance UI/UX and Frontend Web Developer based In Cairo,
                Egypt
              </p>
              <div className={`${classes.__list}`}>
                <div className={`${classes.social__list}`}>
                  <a
                    href={socialLinks[0].path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={socialLinks[0].icon}></i>
                  </a>
                  <a
                    href={socialLinks[1].path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={socialLinks[1].icon}></i>
                  </a>
                </div>
                <span className={`${classes.down__icon}`}>
                  <a href="#TopProjects">
                    <svg
                      viewBox="0 0 52 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${classes.__svg}`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M47.6056 63.1025V25.8975C47.6056 14.0121 37.9325 4.37705 26 4.37705C14.0675 4.37705 4.39437 14.0121 4.39437 25.8975V63.1025C4.39437 74.9879 14.0675 84.623 26 84.623C37.9325 84.623 47.6056 74.9879 47.6056 63.1025ZM26 0C11.6406 0 0 11.5947 0 25.8975V63.1025C0 77.4053 11.6406 89 26 89C40.3594 89 52 77.4053 52 63.1025V25.8975C52 11.5947 40.3594 0 26 0Z"
                        fill="white"
                      />
                      <path
                        d="M23 34.5526C23 32.5906 24.567 31 26.5 31C28.433 31 30 32.5906 30 34.5526V54.4474C30 56.4094 28.433 58 26.5 58C24.567 58 23 56.4094 23 54.4474V34.5526Z"
                        fill="white"
                      />
                    </svg>
                    Scroll down <i class="ri-arrow-down-fill ms-1 mt-2"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col md="6" className="order-md-1">
            <div className={`${classes.profile__img}`}>
              <img
                src="/images/avatar-logo.png"
                alt="atef gad"
                width={270}
                height={205}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Shapes />
    </div>
  );
};

export default Hero;
