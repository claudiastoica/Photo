import React, { useState } from "react";
// style
import "./Navbar.scss";

import {
  Navbar,
  Dropdown,
  Nav,
  Container,
  ButtonGroup,
  NavItem,
} from "react-bootstrap";
import { FiMenu as MobileMenuIcon } from "react-icons/fi";
import { MdClose as MobileCloseIcon } from "react-icons/md";
// react router
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const [isActive, setIsActive] = useState(() => true);

  const handleNavIcon = () => {
    setIsActive(!isActive);
  };

  const handleCollapse = (e) => {
    window.scrollTo(0, 0);
    e.target.style.color = "#02FFE9";
    var btn = document.getElementById("navbarBtn");
    btn.click();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
      id="navigation"
      className="pt-0 pb-0"
    >
      <Container className="px-0 navigation-container h-100">
        <Navbar.Brand className="pt-0 pb-0 mr-0">
          <Link to="/">Logo</Link>
        </Navbar.Brand>

        <Navbar.Toggle
          id="navbarBtn"
          className="p-0"
          aria-controls="responsive-navbar-nav"
          onClick={handleNavIcon}
        >
          {isActive ? <MobileMenuIcon /> : <MobileCloseIcon />}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-center"
        >
          <Nav className="">
            <LinkContainer to="/" onClick={handleCollapse}>
              <NavItem
                className="font-size-20 exo-regular links-wrapper"
                eventkey={"/"}
              >
                Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/about" onClick={handleCollapse}>
              <NavItem
                className="font-size-20 exo-regular links-wrapper"
                eventkey={"/about"}
              >
                Despre mine
              </NavItem>
            </LinkContainer>
            <Dropdown
              as={ButtonGroup}
              className="font-size-20 exo-regular nav-dropdown"
              id="basic-nav-dropdown"
            >
              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
                className="ml-1 font-size-20"
              >
                {" "}
                Albume
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <LinkContainer to="/cununie-civila">
                  <Dropdown.Item
                    className="font-size-20 exo-regular links-wrapper"
                    eventkey={"/cununie-civila"}
                  >
                    Cununie civila
                  </Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/nunta">
                  <Dropdown.Item
                    className="font-size-20 exo-regular links-wrapper"
                    eventkey={"/nunta"}
                  >
                    Nunta
                  </Dropdown.Item>
                </LinkContainer>

                <LinkContainer to="/botez">
                  <Dropdown.Item
                    className="font-size-20 exo-regular links-wrapper"
                    eventkey={"/botez"}
                  >
                    Botez
                  </Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sedinta-foto">
                  <Dropdown.Item
                    className="font-size-20 exo-regular links-wrapper"
                    eventkey={"/sedinta-foto"}
                  >
                    Sedinta foto
                  </Dropdown.Item>
                </LinkContainer>

                <LinkContainer to="/diverse">
                  <Dropdown.Item
                    className="font-size-20 exo-regular links-wrapper"
                    eventkey={"/diverse"}
                  >
                    Diverse
                  </Dropdown.Item>
                </LinkContainer>
              </Dropdown.Menu>
            </Dropdown>

            <LinkContainer to="/oferte" onClick={handleCollapse}>
              <NavItem
                className="font-size-20 exo-regular links-wrapper"
                eventkey={"/oferte"}
              >
                Oferte
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/faq" onClick={handleCollapse}>
              <NavItem
                className="font-size-20 exo-regular links-wrapper"
                eventkey={"/faq"}
              >
                Intrebari frecvente
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/contact" onClick={handleCollapse}>
              <NavItem
                className="font-size-20 exo-regular links-wrapper"
                eventkey={"/contact"}
              >
                Contact
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
