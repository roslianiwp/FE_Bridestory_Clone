import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar bg="white" expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navku">
            <Nav.Link href="#home" style={{ color: "#3f3e3f" }}>
              Store
              <div id="badge-new">New</div>
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Inspirations
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              <Link
                to="/vendors"
                style={{ textDecoration: "none", color: "#3f3e3f" }}
              >
                Vendors
              </Link>
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Events
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Hilda
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Bridestory Pay
            </Nav.Link>
            <Nav.Link href="#link" className="menu">
              Get Bridestory App
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};
export default NavBar;
