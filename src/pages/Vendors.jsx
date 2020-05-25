import React, { Fragment } from "react";

import NavBarVendor from "../components/NavBarVendor";
import "../css/Vendors.css";
import NavBarVendorFilter from "../components/NavBarVendorFilter";
import Cards from "../components/Card";

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

  render() {
    return (
      <Fragment>
        {/* NAVBAR PERTAMA DAN KEDUA */}
        <NavBarVendor
          toggle={() => this.toggleCollapse()}
          isOpen={this.state.isOpen}
        />
        {/* NAVBAR DROPDOWN dan BREADCRUMBS*/}
        <NavBarVendorFilter
          checkedBspay={this.state.checkedBspay}
          checkedFlexi={this.state.checkedFlexi}
          handleChangeBspay={() => this.handleChangeBspay()}
          handleChangeFlexi={() => this.handleChangeFlexi()}
        />
        {/* CARD OF CONTENT */}
        <Cards />
      </Fragment>
    );
  }
}

export default Vendors;
