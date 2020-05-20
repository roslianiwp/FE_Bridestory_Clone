import React, { Fragment } from "react";
import Typist from "react-typist";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "../css/Home.css";
import SignIn from "../components/SignIn";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        {/* JUMBOTRON */}
        <Jumbotron fluid className="jumbotron">
          <Container classname="container">
            <Row>
              <Col md={5}>
                <h3 className="h3">Join Bridestory and get access to</h3>
                <Typist className="MyTypist">
                  <span> 10 mio+ Wedding Inspirations</span>
                  <Typist.Backspace count={29} delay={200} />
                  <span> 20K+ Curated Vendors </span>
                  <Typist.Backspace count={22} delay={200} />
                  <span> 100K+ Trusted Reviews</span>
                </Typist>
                {/* KOTAK BAWAH TYPIST */}
                <Row>
                  <Col md={12}>
                    <div className="bawah-typist">
                      <span className="bawah1">
                        Use Bridestory Pay and enjoy the benefits:
                      </span>
                      <Row className="bawah2">
                        <Col md={4} className="text-center">
                          <i className="fas fa-hourglass-half fa-2x"></i>
                          <br />
                          <p>
                            0% CC Installment
                            <br />
                            for up to 24 months
                          </p>
                        </Col>
                        <Col md={4} className="text-center">
                          <i class="far fa-credit-card fa-2x"></i>
                          <br />
                          <span>More Payment Options</span>
                        </Col>
                        <Col md={4} className="text-center">
                          <i class="fas fa-file-invoice-dollar fa-2x"></i>
                          <br />
                          <span>Easy and Secure Payment</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Button className="learn-more" variant="outline-light">
                  Learn More
                </Button>
              </Col>
              {/* KOTAK LOGIN */}
              <Col md={5} className="d-flex justify-content-end text-center">
                <div className="login">
                  <img
                    src="https://london.bridestory.com/image/upload/dpr_2.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/raw/footer/logo.webp"
                    alt="logo"
                    id="logo"
                  ></img>
                  <p>
                    It takes less than a minute to start your
                    <br /> wedding journey
                  </p>
                  <p style={{ color: "#555" }}>Login with: </p>
                  <Row>
                    <Col md={6}>
                      <div className="kotak-kecil-login">
                        <img
                          src="https://alexandra.bridestory.com/image/upload/assets/facebook2x-H10SkJiD8.png"
                          alt="fb"
                          className="fb-google"
                        ></img>
                        <span className="logo-login"> Facebook</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="kotak-kecil-login">
                        <img
                          src="https://alexandra.bridestory.com/image/upload/assets/google-logo2x-rkgZVmis7.png"
                          alt="google"
                          className="fb-google"
                        ></img>
                        <span className="logo-login">Google</span>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <hr
                      style={{
                        width: "42%",
                        textAlign: "left",
                        marginLeft: "0",
                      }}
                    />
                    <span style={{ textAlign: "center", color: "#848484" }}>
                      Or
                    </span>
                    <hr
                      style={{
                        width: "42%",
                        textAlign: "right",
                        marginLeft: "9",
                      }}
                    />
                  </Row>
                  <Row>{/* <SignIn /> */}</Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        {/* NAVIGATIONBAR */}
        <Navbar bg="white" expand="lg" className="navbar">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Home;
