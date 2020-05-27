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
} from "../store/action/filterAction";
import NavBarVendor from "../components/NavBarVendor";
import "../css/Vendors.css";
import FilterKategori from "../components/FilterKategori";
import Cards from "../components/Card";
import BreadCrumbs from "../components/BreadCrumbs";
import { MDBRow, MDBBtn } from "mdbreact";
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

  handleChangeBspay = () => {
    this.setState({ checked: !this.state.checkedBspay });
  };

  handleChangeFlexi = () => {
    this.setState({ checked: !this.state.checkedFlexi });
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
        <Cards dataVendor={this.props.dataVendor} />
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
    dataKategori: state.filter.dataKategori,
    dataNegara: state.filter.dataNegara,
    dataKota: state.filter.dataKota,
    categoryID: state.filter.categoryID,
    countryID: state.filter.countryID,
    cityID: state.filter.cityID,
    budget: state.filter.budget,
    dataVendor: state.filter.dataVendor,
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
