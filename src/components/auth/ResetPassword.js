import React from "react";

export default function ResetPassword() {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 float-left">Reset Password</h3>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="form-group">
                    <label className="float-left" htmlFor="passwordInput">
                      New Password
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
                    Reset Password
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
