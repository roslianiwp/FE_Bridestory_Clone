const initialState = {
  email: "",
  password: "",
  token: "",
  is_login: false,
  is_signup: false,
  emailPengguna: "",
  kataKunci: "",
  firstName: "",
  lastName: "",
  isLoading: false,
  isLoginFB: false,
  data: [],
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "ACTIVATE_LOADING":
      return {
        ...userState,
        isLoading: true,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        data: action.payload,
        is_login: true,
        isLoading: false,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...userState,
        is_login: false,
        isLoading: false,
      };
    case "MAU_SIGNUP":
      return {
        ...userState,
        is_signup: true,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
        is_signup: false,
      };
    case "SUCCESS_LOGIN_FB":
      return {
        ...userState,
        isLoginFB: true,
      };
    default:
      return userState;
  }
}
