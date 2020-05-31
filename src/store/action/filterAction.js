import axios from "axios";

export const getKategori = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://127.0.0.1:5000/category",
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
      url: "https://127.0.0.1:5000/country",
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
      url: "https://127.0.0.1:5000/city",
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
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (negara == 0 && budget == 0 && kategori == 0 && kota == 0) {
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke1");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke2");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke3");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori == 0) {
      param = {
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke4");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget == 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke5");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke6");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke7");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke8");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        category_id: getState().filter.categoryID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke9");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke10");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        budget: getState().filter.budget,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke11");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
          console.log("masuk ke12");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const getVendorBspay = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (negara == 0 && budget == 0 && kategori == 0 && kota == 0) {
      param = {
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke1 bspay");
          console.log(param);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke2 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke3 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori == 0) {
      param = {
        budget: getState().filter.budget,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke4 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget == 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke5 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke6 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke7 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke8 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        category_id: getState().filter.categoryID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke9 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        budget: getState().filter.budget,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke10 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        budget: getState().filter.budget,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke11 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke12 bspay");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};
export const getVendorFlexi = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (negara == 0 && budget == 0 && kategori == 0 && kota == 0) {
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: {
          flexi_schedule: true,
        },
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke1 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke2 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke3 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori == 0) {
      param = {
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke4 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget == 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke5 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke6 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke7 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke8 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        category_id: getState().filter.categoryID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke9 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke10 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke11 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke12 flexi");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // axios({
    //   method: "GET",
    //   url: "https://127.0.0.1:5000/vendor",
    //   params: {
    //     country_id: 2,
    //   },
    // })
    //   .then(async (response) => {
    //     dispatch({
    //       type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
    //       payload: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
};

export const getVendorBspayFlexi = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);

    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (negara == 0 && budget == 0 && kategori == 0 && kota == 0) {
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: {
          flexi_schedule: true,
          bridestory_pay: true,
        },
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke1 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke2 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke3 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget != 0 && kategori == 0) {
      param = {
        budget: getState().filter.budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke4 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara == 0 && budget == 0 && kategori != 0) {
      param = {
        category_id: getState().filter.categoryID,
        bridestory_pay: true,

        flexi_schedule: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke5 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke6 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke7 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        category_id: getState().filter.categoryID,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke8 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget == 0 && kategori != 0) {
      param = {
        country_id: getState().filter.countryID,
        category_id: getState().filter.categoryID,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke9 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        budget: getState().filter.budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke10 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota == 0 && budget != 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        budget: getState().filter.budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke11 bspayflexi");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (negara != 0 && kota != 0 && budget == 0 && kategori == 0) {
      param = {
        country_id: getState().filter.countryID,
        city_id: getState().filter.cityID,
        flexi_schedule: true,
        bridestory_pay: true,
      };
      axios({
        method: "GET",
        url: "https://127.0.0.1:5000/vendor",
        params: param,
      })
        .then(async (response) => {
          dispatch({
            type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
            payload: response.data,
          });
          console.log("masuk ke12 bspayflexi");
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
