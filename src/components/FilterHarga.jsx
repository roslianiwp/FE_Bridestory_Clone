import React, { Fragment } from "react";

import "../css/Vendors.css";

const FilterKategori = (props, onChangeHandler) => {
  onChangeHandler = (event) => {
    props.changeInputFilterBudget(event.target.value);
  };
  return (
    <Fragment>
      <select className="dd-filter buton-dd-filter" onChange={onChangeHandler}>
        <option>Semua Harga</option>
        <option name="budget" value="1">
          $
        </option>
        <option name="budget" value="2">
          $$
        </option>
        <option name="budget" value="3">
          $$$
        </option>
      </select>
    </Fragment>
  );
};

export default FilterKategori;
