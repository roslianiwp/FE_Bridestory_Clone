import axios from "axios";

export const getKategori = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "http://0.0.0.0:5050/category",
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CATEGORY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getNegara = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "http://0.0.0.0:5050/country",
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_COUNTRY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getKota = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "http://0.0.0.0:5050/city",
      params: {
        country_id: getState().filter.countryID,
      },
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CITY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getVendor = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (negara != 0 && kota != 0 && budget != 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      (negara == 0 || negara == "Semua Negara") &&
      budget != 0 &&
      kategori != 0
    ) {
      param = {
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      (negara == 0 || negara == "Semua Negara") &&
      budget != 0 &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      (negara == 0 || negara == "Semua Negara") &&
      (budget == 0 || budget == "Semua Budget") &&
      kategori != 0
    ) {
      param = {
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      (kota == 0 || kota == "Semua Kota") &&
      (budget == 0 || budget == "Semua Budget") &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        country_id: getState().filter.countryID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      kota != 0 &&
      (budget == 0 || budget == "Semua Budget") &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      kota != 0 &&
      (budget == 0 || budget == "Semua Budget") &&
      kategori != 0
    ) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      (kota == 0 || kota == "Semua Kota") &&
      (budget == 0 || budget == "Semua Budget") &&
      kategori != 0
    ) {
      param = {
        country_id: getState().filter.countryID,
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      kota != 0 &&
      budget != 0 &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      (kota == 0 || kota == "Semua Kota") &&
      budget != 0 &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        country_id: getState().filter.countryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      negara != 0 &&
      kota != 0 &&
      (budget == 0 || budget == "Semua Budget") &&
      (kategori == 0 || kategori == "Semua Kategori")
    ) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
      };
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      (negara == "Semua Negara" || negara == 0) &&
      (budget == "Semua Harga" || budget == 0) &&
      (kategori == "Semua Kategori" || kategori == 0)
    ) {
      axios({
        method: "GET",
        url: "http://0.0.0.0:5050/vendor",
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.warn("cek dari dalem getVendor", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const changeInputFilterKota = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_KOTA",
    payload: e,
  };
};
export const changeInputFilterNegara = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_NEGARA",
    payload: e,
  };
};
export const changeInputFilterKategori = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_KATEGORI",
    payload: e,
  };
};
export const changeInputFilterBudget = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_BUDGET",
    payload: e,
  };
};
