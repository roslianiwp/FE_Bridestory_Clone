import React, { Fragment } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import "../css/Modal.css";

const ModalKu = () => {
  return (
    <Fragment>
      <MDBRow>
        <MDBCol className="d-flex justify-content-center text-center">
          <div className="login-modal">
            <img
              src="https://london.bridestory.com/image/upload/dpr_2.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/raw/footer/logo.webp"
              alt="logo"
              id="logo-modal"
            ></img>

            <p>
              It takes less than a minute to start your
              <br /> wedding journey
            </p>
            <p className="mt-0" style={{ color: "#555" }}>
              Login with:{" "}
            </p>
            <MDBRow>
              <MDBCol md={6}>
                <div className="kotak-kecil-login-modal">
                  <img
                    src="https://alexandra.bridestory.com/image/upload/assets/facebook2x-H10SkJiD8.png"
                    alt="fb"
                    className="fb-google-modal"
                  ></img>
                  <span className="logo-login-modal">Facebook</span>
                </div>
              </MDBCol>
              <MDBCol md={6}>
                <div className="kotak-kecil-login-modal">
                  <img
                    src="https://alexandra.bridestory.com/image/upload/assets/google-logo2x-rkgZVmis7.png"
                    alt="google"
                    className="fb-google-modal"
                  ></img>
                  <span className="logo-login-modal">Google</span>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ marginTop: "10px" }}>
              <hr
                style={{
                  width: "42%",
                  textAlign: "left",
                  marginLeft: "0",
                }}
              />
              <span style={{ textAlign: "center", color: "#848484" }}>Or</span>
              <hr
                style={{
                  width: "42%",
                  textAlign: "right",
                  marginLeft: "9",
                }}
              />
            </MDBRow>
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
                    <button className="buton-modal" type="button">
                      Sign Up or Log in
                    </button>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <p className="tncp-modal">
                By signing up, you are agree with the{" "}
                <span className="tncspan-modal">
                  Terms and <br />
                  Conditions
                </span>{" "}
                applied.
                <br />
                <hr
                  style={{
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                />
                Have a wedding business?
                <span className="tncspan-modal"> Join us as a vendor.</span>
              </p>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    </Fragment>
  );
};
export default ModalKu;
