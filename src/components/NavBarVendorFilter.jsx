import React, { Fragment } from "react";
import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  // MDBCol,
  // MDBContainer,
} from "mdbreact";
import Switch from "react-switch";
import "../css/Vendors.css";

const NavBarVendorFilter = (props) => {
  return (
    <Fragment>
      <MDBRow className="dd-filter d-flex justify-content-center">
        {/* pertama */}
        <MDBDropdown className="dd-filter">
          <MDBDropdownToggle caret color="white" className="buton-dd-filter">
            Semua Kategori
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        {/* kedua */}
        <MDBDropdown className="dd-filter">
          <MDBDropdownToggle caret color="white" className="buton-dd-filter">
            Semua Negara
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        {/* ketiga */}
        <MDBDropdown className="dd-filter">
          <MDBDropdownToggle caret color="white" className="buton-dd-filter">
            Semua Kota
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        {/* keempat */}
        <MDBDropdown className="dd-filter">
          <MDBDropdownToggle caret color="white" className="buton-dd-filter">
            Semua Harga
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        {/* button */}
        <MDBBtn class="cari-vendor">Cari Vendor</MDBBtn>
      </MDBRow>
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
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
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
      <MDBRow>
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

export default NavBarVendorFilter;
