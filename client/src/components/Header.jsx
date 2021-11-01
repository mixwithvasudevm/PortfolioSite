import React, { useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const loginToggle = () => setIsLoginOpen(!isLoginOpen);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) setNavbarSolid(true);
    else setNavbarSolid(false);
  });

  return (
    <div>
      <Navbar
        expand="xl"
        fixed="top"
        light
        className={navbarSolid ? "active" : ""}
      >
        <NavbarBrand href="/" className="px-3 nav-brand">
          Mix With <div className="vasu">Vasudev</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          <Nav navbar>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link "
                to="/"
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/about"
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link "
                to="/aemp"
              >
                AEMP COURSES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/students"
              >
                STUDENT'S WORK
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/about"
              >
                YOUTUBE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/blogs"
              >
                BLOG
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/faq"
              >
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold nav-link"
                to="/faq"
              >
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
