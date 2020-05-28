import React, { Fragment } from "react";
import { MDBNavbar, MDBNavLink, MDBRow } from "mdbreact";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Fragment>
      <MDBNavbar expand="md" className="navini">
        <MDBRow className="navku">
          <MDBNavLink to="#!" className="menu">
            Store
            <div id="badge-new">New</div>
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Inspirations
          </MDBNavLink>
          <MDBNavLink to="/vendors" className="menu">
            Vendors
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Events
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Blog
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Hilda
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Get Bridestory App
          </MDBNavLink>
        </MDBRow>
      </MDBNavbar>
    </Fragment>
  );
};
export default NavBar;
