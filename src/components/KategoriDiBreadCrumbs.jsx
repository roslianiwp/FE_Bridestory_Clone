import React, { Fragment } from "react";
import { MDBDropdownItem } from "mdbreact";
// import Switch from "react-switch";
import "../css/Vendors.css";

const KategoriDiBreadCrumbs = ({ nama }) => {
  return (
    <Fragment>
      <MDBDropdownItem>{nama}</MDBDropdownItem>
    </Fragment>
  );
};

export default KategoriDiBreadCrumbs;
