import React, { Fragment } from "react";
import "../css/Vendors.css";

const FilterNegara = (props, onChangeHandler) => {
  onChangeHandler = (event) => {
    props.changeInputFilterNegara(event.target.value);
    props.getKota();
  };

  return (
    <Fragment>
      <select className=" dd-filter buton-dd-filter" onChange={onChangeHandler}>
        <option>Semua Negara</option>
        {props.dataNegara.map((el) => (
          <option name="countryID" value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default FilterNegara;
