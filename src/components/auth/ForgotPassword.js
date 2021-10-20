import React from "react";

export default function ForgotPassword() {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 float-left">Forgot Password</h3>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="form-group">
                    <label className="float-left" htmlFor="emailInput">
                      Email
                    </label>
                    <input
                      id="emailInput"
                      name="email"
                      type="email"
                      className="form-control rounded-0"
                      required
                    />
                  </div>
                  <h5 className="mt-3 float-left">
                    A password reset link will be sent to your email.
                  </h5>
                  <button className="btn btn-primary float-right">
                    Send Link
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
