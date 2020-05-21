import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/NavBarDua.css";
import $ from "jquery";

const NavBarDua = () => {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
      $("#nav-home").addClass("diplay-inline");
    } else if ($(document).scrollTop() < 1) {
      $("#nav-home").removeClass("display-none");
    }
  });

  return (
    <Fragment>
      <div id="nav-home">
        <Navbar bg="white" expand="lg" className="navdua">
          <Navbar.Brand href="#home">
            <img
              src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/assets/bs_logo_dark-rJ2hfwQqQ.webp"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mt-4">
              <p className="pclass">
                It takes less than a minute to start your wedding journey
              </p>
            </Nav>
            <div className="text-center d-flex justify-content-end">
              <button className="buton" type="button">
                Sign Up or Log in
              </button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  );
};
export default NavBarDua;
