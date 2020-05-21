import React, { Fragment } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "../css/Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <MDBFooter className="footer font-small pt-4 mt-4">
        <MDBContainer fluid className="text-left text-md-left">
          <MDBRow>
            <MDBCol md="2">
              <div>
                <h4 className="title">BRIDESTORY</h4>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">About</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Career</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <div>
                <h4 className="title">BRIDES-TO-BE</h4>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Blog</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Bridestory App</a>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <div>
                <h4 className="title">BUSINESSES</h4>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Become A Vendor</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Business Blog</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Bridestory Pro</a>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <div>
                <h4 className="title">SUPPORT</h4>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Help Center</a>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <MDBDropdown className="dropdown">
                <MDBDropdownToggle caret id="warna-dropdown">
                  <img
                    src={require("../images/flag.png")}
                    alt="flag"
                    className="flag"
                  ></img>
                  <span> EN</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem id="language">
                    SELECT LANGUAGE
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>
                    <img
                      src={require("../images/flag.png")}
                      alt="flag"
                      className="flag"
                    ></img>
                    <span> English</span>
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>
                    <img
                      src={require("../images/flag2.png")}
                      alt="flag2"
                      className="flag"
                    ></img>
                    <span> Bahasa Indonesia</span>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol md="2">
              <MDBRow>
                <MDBCol md="2">
                  <i className="fab fa-facebook fa-2x"></i>
                </MDBCol>
                <MDBCol md="2">
                  <i className="fab fa-twitter fa-2x "></i>
                </MDBCol>
                <MDBCol md="2">
                  <i class="fab fa-instagram fa-2x"></i>
                </MDBCol>
                <MDBCol md="2">
                  <i class="fab fa-pinterest fa-2x"></i>
                </MDBCol>
                <MDBCol md="2">
                  <i class="fab fa-youtube fa-2x"></i>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5">
            <MDBCol md="6">
              <div className="title">
                <img
                  src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/assets/logo2x-HJyW6We2X.webp"
                  alt="logoputih"
                ></img>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="d-flex justify-content-end">
                <p className="footer-privacy">Privacy Policy</p>
                <p className="footer-bawah">Terms & Conditions</p>
                <p className="footer-bawah">Sitemap</p>
                <p className="footer-bawah">
                  Copyright &copy; 2020 Bridestory. All Rights Reserved
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <p className="tokped">Part of Tokopedia</p>
            </MDBCol>
            <MDBCol md="6">
              <div className="d-flex justify-content-end">
                <i className="chat far fa-comment fa-2x"></i>
                <p className="chat"> Chat</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </Fragment>
  );
};
export default Footer;
