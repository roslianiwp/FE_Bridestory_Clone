import React, { Fragment } from "react";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/userAction";
import {
  getKategori,
  getNegara,
  getKota,
  changeInputFilterNegara,
  changeInputFilterKategori,
  changeInputFilterKota,
  changeInputFilterBudget,
  getVendor,
  getVendorBspay,
  getVendorFlexi,
  getVendorBspayFlexi,
} from "../store/action/filterAction";
import NavBarVendor from "../components/NavBarVendor";
import "../css/Vendors.css";
import FilterKategori from "../components/FilterKategori";
import Cards from "../components/Card";
import BreadCrumbs from "../components/BreadCrumbs";
import { MDBRow, MDBBtn, MDBCol } from "mdbreact";
import FilterNegara from "../components/FilterNegara";
import FilterKota from "../components/FilterKota";
import FilterHarga from "../components/FilterHarga";

class Vendors extends React.Component {
  state = {
    isOpen: false,
    checkedBspay: false,
    checkedFlexi: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChangeBspay = async () => {
    this.setState({ checkedBspay: !this.state.checkedBspay });
    console.log("bspay", this.state.checkedBspay);
    console.log("flex", this.state.checkedFlexi);
    if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === false
    ) {
      await this.props.getVendorBspay();
    } else if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorBspayFlexi();
    } else if (
      this.state.checkedBspay === true &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorFlexi();
    }
  };

  handleChangeFlexi = async () => {
    this.setState({ checkedFlexi: !this.state.checkedFlexi });
    console.log("bspay dari flexi", this.state.checkedBspay);
    console.log("flex dari flexi", this.state.checkedFlexi);
    if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === false
    ) {
      await this.props.getVendorFlexi();
    } else if (
      this.state.checkedFlexi === false &&
      this.state.checkedBspay === true
    ) {
      await this.props.getVendorBspayFlexi();
    } else if (
      this.state.checkedBspay === false &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendor();
    } else if (
      this.state.checkedBspay === true &&
      this.state.checkedFlexi === true
    ) {
      await this.props.getVendorBspay();
    }
  };

  handleCariVendor = async () => {
    await this.props.getVendor();
  };

  componentDidMount = async () => {
    await this.props.getKategori();
    await this.props.getNegara();
    await this.props.getKota();
    await this.props.getVendor();
  };

  render() {
    return (
      <Fragment>
        {/* NAVBAR PERTAMA DAN KEDUA */}
        <NavBarVendor
          toggle={() => this.toggleCollapse()}
          isOpen={this.state.isOpen}
          {...this.props}
        />
        {/* NAVBAR DROPDOWN dan BREADCRUMBS*/}
        <MDBRow
          className="dd-filter d-flex justify-content-center"
          style={{ marginRight: "0px" }}
        >
          {/* FILTER-FILTER */}
          <FilterKategori
            dataKategori={this.props.dataKategori}
            changeInputFilterKategori={this.props.changeInputFilterKategori}
          />
          <FilterNegara
            dataNegara={this.props.dataNegara}
            changeInputFilterNegara={this.props.changeInputFilterNegara}
            getKota={this.props.getKota}
          />
          <FilterKota
            dataKota={this.props.dataKota}
            changeInputFilterKota={this.props.changeInputFilterKota}
          />
          <FilterHarga
            budget={this.props.budget}
            changeInputFilterBudget={this.props.changeInputFilterBudget}
          />
          <MDBBtn class="cari-vendor" onClick={this.handleCariVendor}>
            Cari Vendor
          </MDBBtn>
        </MDBRow>
        <BreadCrumbs
          checkedBspay={this.state.checkedBspay}
          checkedFlexi={this.state.checkedFlexi}
          handleChangeBspay={() => this.handleChangeBspay()}
          handleChangeFlexi={() => this.handleChangeFlexi()}
          kategori={this.props.dataKategori}
        />
        {/* CARD OF CONTENT */}
        {this.props.isLoading ? (
          <MDBRow
            className="d-flex justify-content-center"
            style={{ marginRight: "0px" }}
          >
            <MDBCol md="12 d-flex justify-content-center">
              <div>
                <img
                  src="https://www.bridestory.com/images/loadersmall.gif"
                  alt="loading"
                  style={{ marginTop: "10px", marginLeft: "-10px" }}
                ></img>
                {/* <img
                  src="https://3.bp.blogspot.com/-eZG6YtZKdr4/WnLKLHHDZkI/AAAAAAAAChA/FHelaYBRPIAaj1fBNh8geGy64RTHEzRzQCLcBGAs/s1600/loader.gif"
                  alt="loading"
                ></img> */}
              </div>
            </MDBCol>
          </MDBRow>
        ) : (
          <Cards dataVendor={this.props.dataVendor} />
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    emailPengguna: state.user.emailPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
    loading: state.user.isLoading,
    isLoginFB: state.user.isLoginFB,
    dataKategori: state.filter.dataKategori,
    dataNegara: state.filter.dataNegara,
    dataKota: state.filter.dataKota,
    categoryID: state.filter.categoryID,
    countryID: state.filter.countryID,
    cityID: state.filter.cityID,
    budget: state.filter.budget,
    dataVendor: state.filter.dataVendor,
    isLoading: state.filter.isLoadingVendor,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getKategori,
  getNegara,
  getKota,
  changeInputFilterNegara,
  changeInputFilterKategori,
  changeInputFilterKota,
  changeInputFilterBudget,
  getVendor,
  getVendorBspay,
  getVendorFlexi,
  getVendorBspayFlexi,
};
export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
