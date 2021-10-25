import axios from "axios";

const loginUrl = "/api/login";
const registerUrl = "/api/register";
const profileUrl = "/api/profile";
const editUrl = "/api/edit";
const forgotUrl = "/api/forgot-password";
const resetUrl = "/api/reset-password";
const googleUrl = "/api/google";

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
    try {
      return !!localStorage.getItem("token");
    } catch (error) {
      return console.log(error);
    }
  },
  logout: () => {
    try {
      return localStorage.removeItem("token");
    } catch (error) {
      return console.log(error);
    }
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
  forgot: async (email) => {
    try {
      const res = await axios.post(forgotUrl, email);
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  reset: async (data) => {
    try {
      const res = await axios.post(resetUrl, data);
      return res;
    } catch (error) {
      return console.log(error);
    }
  },
  google: async (token) => {
    try {
      const res = await axios.post(googleUrl, token);
      return res;
    } catch (error) {
      return console.log(error);
    }
  },
};

export default AuthService;
