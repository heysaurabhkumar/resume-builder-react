import axios from "axios";
import swal from "sweetalert";

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
      swal("Oops!", err.response.data, "error");
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
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  },
  register: async (user) => {
    try {
      const res = await axios.post(registerUrl, user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  profile: async () => {
    try {
      const res = await axios.get(profileUrl);
      const user = res.data;
      return user;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  edit: async (user) => {
    try {
      await axios.post(editUrl, user);
      swal("Updated", "Your profile has been updataed.", "success");
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  forgot: async (email) => {
    try {
      await axios.post(forgotUrl, email);
      swal(
        "Reset Link Sent",
        "A password reset link has been sent to your email address. Open email and reset your password within 15 minutes.",
        "success"
      );
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  reset: async (data) => {
    try {
      await axios.post(resetUrl, data);
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
  google: async (token) => {
    try {
      const res = await axios.post(googleUrl, token);
      return res;
    } catch (err) {
      swal("Oops!", err.response.data, "error");
    }
  },
};

export default AuthService;
