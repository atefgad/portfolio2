import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";

import classes from "./Header.module.css";
import { menuLinks } from "../../data/main";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  const stickyHeader = () => {
    if (window.scrollY >= 170) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className={`${classes.header} ${sticky ? "sticky__nav" : ""} `}>
      <Container>
        {/*___ NavBar ___*/}
        <nav className={`${classes.nav__wrapper}`}>
          {/*__ LOGO __*/}
          <div className={`${classes.logo}`}>
            <h5>
              <Link to="/" className="text__gry">
                {`< `} <span className="text__main">a</span> <b>g</b> {`/> `}
              </Link>
            </h5>
          </div>
          {/*__ Nav Main Menu __*/}
          <div
            className={`${
              !toggle
                ? classes.navigation
                : classes.navigation + " " + classes.active__menu
            }`}
            onClick={toggleMenu}
          >
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

            <div className={`${classes.nav__right} ms-3`}>
              <p className="d-flex align-items-center gap-1 mb-0">
                {" "}
                <a
                  className="btn btn-primary d-flex align-content-center align-items-center gap-2"
                  href="tel:+2001017857849"
                >
                  <i className="ri-phone-fill"></i>{" "}
                  <span className="uppercase">Let's Talk</span>
                </a>
              </p>
            </div>
            {/*__ Close Button menu __*/}
            <span className={`${classes.menu__close__btn}`}>
              <i className="ri-close-fill" onClick={toggleMenu}></i>
              <b>Close </b>
            </span>
          </div>
          {/*__ mobile Button menu __*/}
          <div
            onClick={toggleMenu}
            className={`text-white d-md-none d-sm-flex gap-1 ${classes.mobile__menu}`}
          >
            <i className="ri-menu-line"></i> Menu
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
