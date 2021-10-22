import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthService from "../../services/AuthService";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.login(user);
    history.push("/profile");
  };

  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      history.push("/profile");
    }
  });

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 ">Login</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control rounded-0"
                      placeholder="Enter email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control rounded-0"
                      placeholder="Enter password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Link className=" mt-10" to="/forgot-password">
                    Forgot Password
                  </Link>
                  <button type="submit" className="btn btn-success float-right">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center mt-3">Or</p>
            <button className="google btn1" type="button">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
