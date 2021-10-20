import React from "react";

export default function Register() {
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
                <form className="form">
                  <div className="form-group">
                    <label className="float-left" htmlFor="emailInput">
                      Email
                    </label>
                    <input
                      required
                      id="emailInput"
                      name="email"
                      type="email"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="usernameInput">
                      Username
                    </label>
                    <input
                      required
                      id="usernameInput"
                      name="username"
                      type="text"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="passwordInput">
                      Password
                    </label>
                    <input
                      required
                      id="passwordInput"
                      name="password"
                      type="password"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="float-left"
                      htmlFor="confirmPasswordInput"
                    >
                      Confirm Password
                    </label>
                    <input
                      required
                      id="confirmPasswordInput"
                      name="confirmPassword"
                      type="text"
                      className="form-control rounded-0"
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
