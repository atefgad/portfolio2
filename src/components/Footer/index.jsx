import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import classes from "./Footer.module.css";
import { menuLinks, socialLinks } from "../../data/main";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`${classes.footer}`}>
      <Container>
        <Row className="align-items-center">
          {/* ========= footer top =========== */}
          <Col lg="4" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {menuLinks.map((item, index) => (
                <li
                  key={index}
                  // className={router.asPath == item.path ? classes.active : ""}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </div>
          </Col>
          <Col lg="4" className={`${classes.scroll_arrow_btn}`}>
            <a href="#!" className="mx-auto" title="To top">
              <i className="ri-arrow-up-s-line"></i>
            </a>
          </Col>
          <Col lg="4" className={`${classes.footer__top}`}>
            <div className={`${classes.social__list}`}>
              <div className={`${classes.social__list}`}>
                {socialLinks.map((element, index) => (
                  <a
                    href={element.path}
                    target="_blank"
                    key={index}
                    rel="noreferrer"
                  >
                    <i className={element.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; Copyright {year} - All right reserved. </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="whatsAppIcon">
        <a
          href="https://api.whatsapp.com/send?phone=2001017857849"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
