import React, { Fragment } from "react";
import { MDBRow } from "mdbreact";
import "../css/Home.css";

const JoinVendor = () => {
  return (
    <Fragment>
      <MDBRow className="d-flex justify-content-end text-center">
        <div className="join-vendor">
          <p>
            Have a wedding business?
            <span>Join us as a vendor.</span>
          </p>
        </div>
      </MDBRow>
    </Fragment>
  );
};
export default JoinVendor;
