import React, { useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

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
        expand="md"
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
                className="mx-lg-4 text-center font-weight-bold "
                href="/"
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/about"
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold "
                href="/"
              >
                AEMP COURSES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/finance"
              >
                STUDENT'S WORK
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/about"
              >
                YOUTUBE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/faq"
              >
                BLOG
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/faq"
              >
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-lg-4 text-center font-weight-bold"
                href="/faq"
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
