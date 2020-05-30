import React, { Fragment } from "react";
import "../css/Vendors.css";

const FilterKota = (props, onChangeHandler) => {
  onChangeHandler = (event) => {
    props.changeInputFilterKota(event.target.value);
  };

  return (
    <Fragment>
      <select className="dd-filter buton-dd-filter" onChange={onChangeHandler}>
        <option value="0">Semua Kota</option>
        {props.dataKota.map((el) => (
          <option name="cityID" value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default FilterKota;
