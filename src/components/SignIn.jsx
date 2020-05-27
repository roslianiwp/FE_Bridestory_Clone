import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "../css/SignIn.css";

const SignIn = (props, postLogin) => {
  postLogin = async () => {
    await props.doLogin();
    const is_login = localStorage.getItem("is_login");
    if (is_login) {
      props.history.push("/vendors");
    }
  };

  return (
    <Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            {props.is_signup ? (
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="First Name"
                    group
                    validate
                    error="wrong"
                    type="text"
                    success="right"
                    style={{ width: "300px" }}
                    name="firstName"
                    onChange={(e) => props.changeInput(e)}
                  />
                  <MDBInput
                    label="Last Name"
                    group
                    type="text"
                    validate
                    style={{ width: "300px" }}
                    name="lastName"
                    onChange={(e) => props.changeInput(e)}
                  />
                </div>
              </form>
            ) : (
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
                    name="emailPengguna"
                    onChange={(e) => props.changeInput(e)}
                  />
                  <MDBInput
                    label="Password"
                    group
                    type="password"
                    validate
                    style={{ width: "300px" }}
                    name="kataKunci"
                    onChange={(e) => props.changeInput(e)}
                  />
                </div>
                {props.loading ? (
                  <div className="text-center">
                    <button
                      className="buton-loading"
                      type="button"
                      onClick={() => postLogin()}
                    >
                      Loading..
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      className="buton"
                      type="button"
                      onClick={() => postLogin()}
                    >
                      Sign Up or Log in
                    </button>
                  </div>
                )}
              </form>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};
export default SignIn;
