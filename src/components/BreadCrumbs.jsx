import React, { Fragment } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBDropdownMenu,
} from "mdbreact";
import Switch from "react-switch";
import "../css/Vendors.css";
import KategoriDiBreadCrumbs from "./KategoriDiBreadCrumbs";

const BreadCrumbs = (props) => {
  return (
    <Fragment>
      {/* BREADCRUMBS */}
      <MDBRow className="breadkrum ">
        <MDBBreadcrumb color="white" className="isi-breadkrum">
          <MDBBreadcrumbItem className="home-bk">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBDropdown className="togel-bk-parent">
          <MDBDropdownToggle caret color="white" className="togel-bk">
            Kategori Vendor
          </MDBDropdownToggle>
          <MDBDropdownMenu left basic>
            {props.kategori.map((el, index) => {
              return (
                <div key={index}>
                  <KategoriDiBreadCrumbs nama={el.name} />
                </div>
              );
            })}
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBRow>
      {/* JUDUL DAN FILTER SWITCH */}
      <MDBRow className="d-flex justify-content-center sebelum-filter">
        <p>
          Menampilkan Hasil Untuk <span>Semua Kategori</span> di{" "}
          <span>Semua Kota</span>, <span>Semua Negara</span>.
        </p>
      </MDBRow>
      <MDBRow style={{ marginRight: "0px" }}>
        <div className="switch-bp-vendor d-flex justify-content-center">
          Hanya menampilkan Bridestory Pay Vendor
          <Switch
            onChange={props.handleChangeBspay}
            checked={props.checkedBspay}
            className="react-switch"
            onColor="#eba1a1"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
        <div className="switch-bp-vendor d-flex justify-content-center">
          Hanya menampilkan vendor Flexi Reschedule
          <Switch
            onChange={props.handleChangeFlexi}
            checked={props.checkedFlexi}
            className="react-switch"
            onColor="#eba1a1"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </MDBRow>
    </Fragment>
  );
};

export default BreadCrumbs;
