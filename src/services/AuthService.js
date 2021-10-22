import axios from "axios";

const loginUrl = "/api/login";
const registerUrl = "/api/register";
const profileUrl = "/api/profile";
const editUrl = "/api/edit";

const AuthService = {
  login: async (user) => {
    try {
      const res = await axios.post(loginUrl, user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      return console.log(err);
    }
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
  register: async (user) => {
    try {
      const res = await axios.post(registerUrl, user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      return console.log(err);
    }
  },
  profile: async () => {
    try {
      const res = await axios.get(profileUrl);
      const user = res.data;
      return user;
    } catch (err) {
      return console.log(err);
    }
  },
  edit: async (user) => {
    try {
      await axios.post(editUrl, user);
    } catch (err) {
      return console.log(err);
    }
  },
};

export default AuthService;
