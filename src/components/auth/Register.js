import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthService from "../../services/AuthService";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.register(user);
    history.push("/profile");

    // console.log(user);
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
                <h3 className="mb-0 float-left">Register</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="float-left" htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="form-control rounded-0"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="username">
                      Username
                    </label>
                    <input
                      required
                      id="username"
                      name="username"
                      type="text"
                      className="form-control rounded-0"
                      value={user.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="password">
                      Password
                    </label>
                    <input
                      required
                      id="password"
                      name="password"
                      type="password"
                      className="form-control rounded-0"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      required
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="form-control rounded-0"
                      value={user.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary float-right">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
