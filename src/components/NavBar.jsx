import React, { Fragment } from "react";
import { MDBNavbar, MDBNavLink, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = (props, toVendor) => {
  toVendor = () => {
    const is_login = localStorage.getItem("is_login");
    if (is_login) {
      props.history.push("/vendors");
    } else {
      alert("anda belum login!");
    }
  };
  return (
    <Fragment>
      <MDBNavbar expand="md" className="navini">
        <MDBRow>
          <MDBNavLink to="#!" className="menu">
            Store
            <div id="badge-new">New</div>
          </MDBNavLink>
          <MDBNavLink to="#!" className="menu">
            Inspirations
          </MDBNavLink>
          <Link
            onClick={toVendor}
            className="menu"
            style={{ marginTop: "8px" }}
          >
            Vendors
          </Link>
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
