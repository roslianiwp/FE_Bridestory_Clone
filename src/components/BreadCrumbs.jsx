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
  let nama;
  let kota;
  let negara;
  if (props.categoryID === 0 || props.categoryID === "Semua Kategori") {
    nama = "Semua Kategori";
  } else if (props.categoryID === "1") {
    nama = "Cake";
  } else if (props.categoryID === "2") {
    nama = "Bridal";
  } else if (props.categoryID === "3") {
    nama = "Catering";
  } else if (props.categoryID === "4") {
    nama = "Dress";
  } else if (props.categoryID === "5") {
    nama = "Decoration";
  } else if (props.categoryID === "6") {
    nama = "Planner";
  } else if (props.categoryID === "7") {
    nama = "Jewelry";
  }

  if (props.cityID === 0 || props.cityID === "Semua Kota") {
    kota = "Semua Kota";
  } else if (props.cityID === "1") {
    kota = "Surabaya";
  } else if (props.cityID === "2") {
    kota = "Jakarta";
  } else if (props.cityID === "3") {
    kota = "Serawak";
  } else if (props.cityID === "4") {
    kota = "Bandung";
  } else if (props.cityID === "5") {
    kota = "Brunei";
  } else if (props.cityID === "6") {
    kota = "Bandar Seri Begawan";
  } else if (props.cityID === "7") {
    kota = "Kuala Lumpur";
  } else if (props.cityID === "8") {
    kota = "Rangoon";
  } else if (props.cityID === "9") {
    kota = "Hanoi";
  } else if (props.cityID === "10") {
    kota = "Saigon";
  } else if (props.cityID === "11") {
    kota = "Bangkok";
  } else if (props.cityID === "12") {
    kota = "Phuket";
  } else if (props.cityID === "13") {
    kota = "Singapore";
  } else if (props.cityID === "14") {
    kota = "Putrajaya";
  }

  if (props.countryID === 0 || props.countryID === "Semua Negara") {
    negara = "Semua Negara";
  } else if (props.countryID === "1") {
    negara = "Malaysia";
  } else if (props.countryID === "2") {
    negara = "Indonesia";
  } else if (props.countryID === "3") {
    negara = "Thailand";
  } else if (props.countryID === "4") {
    negara = "Vietnam";
  } else if (props.countryID === "5") {
    negara = "Singapore";
  } else if (props.countryID === "6") {
    negara = "Myanmar";
  } else if (props.countryID === "7") {
    negara = "Brunei Darussalam";
  }
  return (
    <Fragment>
      {/* BREADCRUMBS */}
      <MDBRow className="breadkrum ">
        <MDBBreadcrumb color="white" className="isi-breadkrum">
          <MDBBreadcrumbItem className="home-bk">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Vendor List</MDBBreadcrumbItem>
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
          Menampilkan Hasil Untuk <span>{nama}</span> di <span>{kota}</span>,{" "}
          <span>{negara}</span>.
        </p>
      </MDBRow>
      <MDBRow style={{ marginRight: "0px" }}>
        <div className="switch-bp-vendor d-flex justify-content-center">
          Hanya menampilkan Bridestory Pay Vendor
          <Switch
            onChange={() => props.handleChangeBspay()}
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
            onChange={() => props.handleChangeFlexi()}
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
