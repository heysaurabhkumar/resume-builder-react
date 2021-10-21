import axios from "axios";

const loginUrl = "/api/login";

const AuthService = {
  login: (user) => {
    axios
      .post(loginUrl, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  },
  getToken: () => {
    return localStorage.getItem("token");
  },
  isLoggedIn: () => {
    return !!localStorage.getItem("token");
  },
  logout: () => {
    return localStorage.removeItem("token");
  },
};

export default AuthService;
