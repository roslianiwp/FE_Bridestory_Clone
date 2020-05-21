import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "../css/SignIn.css";

const SignIn = () => {
  return (
    <Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Email Address"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  style={{ width: "300px" }}
                />
                <MDBInput
                  label="Password"
                  group
                  type="password"
                  validate
                  style={{ width: "300px" }}
                />
              </div>
              <div className="text-center">
                <button className="buton" type="button">
                  Sign Up or Log in
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};
export default SignIn;
