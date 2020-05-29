import React, { Fragment } from "react";
import { GoogleLogout } from "react-google-login";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
} from "mdbreact";
import { Link } from "react-router-dom";
import "../css/Vendors.css";

const NavBarVendor = (props, postSignout) => {
  postSignout = async () => {
    if (props.isLoginFB) {
      window.FB.logout(function (response) {
        props.logOutFB();
        props.history.push("/");
      });
    } else if (props.isLoginGoogle) {
      await props.logOutGoogle();
      props.history.push("/");
    } else {
      props.doSignOut();
      props.history.push("/");
    }
  };
  const nama = localStorage.getItem("nama");
  const foto = localStorage.getItem("foto");
  return (
    <Fragment>
      {/* START NAVBAR PERTAMA */}
      <MDBNavbar expand="md" className="navhaldua">
        <Link to="/">
          <img
            src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/assets/bs_logo_dark-rJ2hfwQqQ.webp"
            alt="logo"
            id="logoheaderku"
          ></img>
        </Link>
        <MDBFormInline>
          <div className="panjang">
            <span className="imgs-menu imgs-menu--search magnifier-icon"></span>
            <input
              className="form-control mr-sm-2 search-ku"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </MDBFormInline>
        <MDBNavbarToggler onClick={props.toggleCollapse} />
        <MDBCollapse
          id="navbarCollapse3"
          isOpen={props.isOpen}
          navbar
          className="mr-0"
        >
          <MDBNavbarNav>
            <MDBNavItem>
              <MDBDropdown className="separator mr-0">
                <MDBDropdownToggle
                  nav
                  caret
                  className="avatar-dropdown"
                  style={{ color: "black" }}
                >
                  <span className="mr-2">
                    {foto ? (
                      <img src={foto} alt="avatar" id="foto-profile"></img>
                    ) : (
                      <img
                        src="https://london.bridestory.com/image/upload/c_fill,d_profile-dash-default_t6ouok.gif,dpr_1.0,f_auto,fl_progressive,h_25,pg_1,q_80,w_25/v1/assets/profile-dash-default_t6ouok.gif"
                        alt="avatar"
                      ></img>
                    )}
                    {nama.slice(0, 8)}
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!" className="avatar-dropdown">
                    <span className="mr-2">
                      {foto ? (
                        <img src={foto} alt="avatar" id="foto-profile"></img>
                      ) : (
                        <img
                          src="https://london.bridestory.com/image/upload/c_fill,d_profile-dash-default_t6ouok.gif,dpr_1.0,f_auto,fl_progressive,h_25,pg_1,q_80,w_25/v1/assets/profile-dash-default_t6ouok.gif"
                          alt="avatar"
                        ></img>
                      )}
                      {nama}
                    </span>
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--idea dd"></span>
                    Inspiration Board
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--shop dd"></span>
                    Bridestory Pay
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--saved dd"></span>
                    Vendor Pilihan
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--document dd"></span>
                    Blog Submission
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--message dd"></span>
                    Pesan
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--notif dd"></span>
                    Notifikasi
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--baloon dd"></span>
                    Ulasan Saya
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <span className="imgs-menu imgs-menu--setting dd"></span>
                    Pengaturan User
                  </MDBDropdownItem>
                  {props.isLoginGoogle ? (
                    <MDBDropdownItem href="#!">
                      <GoogleLogout
                        clientId="7968812398-dcf8ckgcjm1j1np8anjc0nudno4q5ons.apps.googleusercontent.com"
                        render={() => (
                          <div onClick={() => postSignout()}>
                            <span className="imgs-menu imgs-menu--logout dd"></span>
                            Keluar
                          </div>
                        )}
                        buttonText="Logout"
                        onLogoutSuccess={props.logOutGoogle}
                      ></GoogleLogout>
                    </MDBDropdownItem>
                  ) : (
                    <MDBDropdownItem href="#!" onClick={() => postSignout()}>
                      <span className="imgs-menu imgs-menu--logout dd"></span>
                      Keluar
                    </MDBDropdownItem>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBRow
          style={{ marginLeft: "-80px" }}
          class="d-flex justify-content-center text-center"
        >
          <MDBNavLink to="#!">
            <span className="imgs-menu imgs-menu--shop menu-atas"></span>
          </MDBNavLink>
          <MDBNavLink to="#!">
            <span className="imgs-menu imgs-menu--notif menu-atas"></span>
          </MDBNavLink>
          <div className="separator">
            <MDBNavLink to="#!">
              <span className="imgs-menu imgs-menu--message menu-atas"></span>
            </MDBNavLink>
          </div>
        </MDBRow>
        <MDBNavbarToggler onClick={props.toggle} />
        <MDBCollapse
          id="navbarCollapse3"
          isOpen={props.isOpen}
          navbar
          className="mr-0"
        >
          <MDBNavbarNav>
            <MDBNavItem>
              <MDBDropdown className=" mr-0 bahasaplis">
                <MDBDropdownToggle
                  nav
                  caret
                  className="bahasa-dropdown"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={require("../images/flag.png")}
                    alt="flag"
                    className="flag"
                  ></img>
                  <span> EN</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem id="language">Pilih Bahasa</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>
                    <img
                      src={require("../images/flag.png")}
                      alt="flag"
                      className="flag-dd"
                    ></img>
                    <span> English</span>
                  </MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>
                    <img
                      src={require("../images/flag2.png")}
                      alt="flag2"
                      className="flag-dd"
                    ></img>
                    <span> Bahasa Indonesia</span>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {/* END OF NAVBAR PERTAMA */}
      {/* START NAVBAR KEDUA */}
      <MDBNavbar expand="md" className="navhaldua">
        <MDBRow class="d-flex justify-content-center text-center">
          <MDBNavLink to="/" className="navbarhaldua-kedua">
            Home
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Store
            <div id="badge-new">New</div>
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Inspirations
          </MDBNavLink>
          <MDBNavLink to="/vendors" className="navbarhaldua-kedua">
            Vendors
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Events
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Blog
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Hilda
          </MDBNavLink>
          <MDBNavLink to="#!" className="navbarhaldua-kedua">
            Get Bridestory App
          </MDBNavLink>
        </MDBRow>
      </MDBNavbar>
      {/* END OF NAVBAR KEDUA */}
    </Fragment>
  );
};

export default NavBarVendor;
