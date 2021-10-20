import axios from "axios";

const loginUrl = "http://localhost:5000/api/login";

const AuthService = {
  login: (user) => {
    axios
      .post(loginUrl, user)
      .then((res) => {
        return console.log(res);
      })
      .catch((err) => console.log(err));
  },
};

export default AuthService;
