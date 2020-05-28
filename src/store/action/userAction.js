import axios from "axios";

export const doLogin = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://127.0.0.1:5000/login",
      params: {
        email: getState().user.emailPengguna,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        console.warn("cek dari dalem login action", response);
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_login", true);
        }
      })
      .catch(async (error) => {
        console.log(error);
        await dispatch(doSignUp);
        dispatch({ type: "MAU_SIGNUP" });
      });
  };
};

export const doSignUp = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    const bodyRequest = {
      email: getState().user.emailPengguna,
      password: getState().user.kataKunci,
      first_name: getState().user.firstName,
      last_name: getState().user.lastName,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://127.0.0.1:5000/client", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const doSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  return {
    type: "SUCCESS_LOGOUT",
  };
};

export const logInFB = () => {
  return {
    type: "SUCCESS_LOGIN_FB",
  };
};
