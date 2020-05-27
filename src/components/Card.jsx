import React, { Fragment } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdbreact";
import "../css/Vendors.css";

const Cards = (props) => {
  return (
    <Fragment>
      <MDBContainer>
        <MDBRow>
          {props.dataVendor.map((el, index) => (
            <div className="row-card">
              <MDBCol md="3">
                <MDBCard className="cardku">
                  <img
                    className="img-fluid img-cardku"
                    alt="jajal-fotocard"
                    src={el.image}
                  />
                  <MDBCardBody className="text-center">
                    <MDBCardTitle className="card-titleku">
                      {el.name}
                    </MDBCardTitle>
                    <span className="category-vendor">
                      {" "}
                      {el.category_id.name.charAt(0).toUpperCase() +
                        el.category_id.name.slice(1)}
                    </span>
                    <span className="category-vendor">
                      {" "}
                      {el.city_id.name}, {el.city_id.country_id.name}
                    </span>
                    <div className="ratingku">
                      <span className="dollar"> {"$".repeat(el.budget)}</span>
                      <span className="separator"></span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span className="total-reviews">5/5 (25 reviews)</span>
                    </div>
                  </MDBCardBody>
                  <hr />
                  <MDBRow>
                    <MDBCol md="9" className="bspay-vendor">
                      <i className="fas fa-hourglass-half fa-hal-vendor"></i>{" "}
                      <span> 0% Installment up to 24 months</span>
                      <br />
                      <i className="far fa-credit-card fa-hal-vendor"></i>
                      <span> More Payment Options</span>
                      <br />
                      <i className="fas fa-file-invoice-dollar fa-hal-vendor"></i>
                      <span> Easy & secure payment</span>
                    </MDBCol>
                    <MDBCol md="3">
                      <button className="button-vendorku" href="#">
                        Lihat Harga
                      </button>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </div>
          ))}
        </MDBRow>
        {/* END OF CARD OF CONTENT */}
      </MDBContainer>
    </Fragment>
  );
};
export default Cards;
