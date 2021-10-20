import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthService from "../../services/AuthService";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    AuthService.login(user);
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 float-left">Login</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="float-left" htmlFor="email">
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
                    <label className="float-left" htmlFor="password">
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
                  <Link className="float-left mt-10" to="/forgot-password">
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
