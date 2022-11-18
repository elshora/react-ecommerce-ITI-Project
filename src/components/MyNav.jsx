import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faHeartCircleExclamation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MyLink from "./dumb/MyLink";

export default function MyNav() {
  const { amount } = useSelector((state) => state.cart);
  let links = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "shop",
    },
    {
      id: 3,
      title: "contact",
    },
    {
      id: 4,
      title: "about",
    },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container container="true">
          <Navbar.Brand className="w-25" href="#">
            <NavLink to="/">
              <img src="./images/Logo.jpg" height="30" alt="" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              {links.map((link) => (
                <MyLink key={link.id} link={link.title} />
              ))}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faCartPlus} />
                <span>{amount}</span>
              </NavLink>
              <NavLink className="nav-link">
                <FontAwesomeIcon icon={faHeartCircleExclamation} />
              </NavLink>
              <NavLink className="nav-link">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
              <NavLink to="/register" className="nav-link mx-1">
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
