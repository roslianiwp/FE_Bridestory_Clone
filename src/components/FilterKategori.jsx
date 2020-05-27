import React, { Fragment } from "react";
import "../css/Vendors.css";

const FilterKategori = (props, onChangeHandler) => {
  onChangeHandler = (event) => {
    props.changeInputFilterKategori(event.target.value);
  };

  return (
    <Fragment>
      <select className="dd-filter buton-dd-filter" onChange={onChangeHandler}>
        <option>Semua Kategori</option>
        {props.dataKategori.map((el, index) => (
          <option name="categoryID" value={el.id}>
            {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default FilterKategori;
