import React from "react";

export default function EditProfile() {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 float-left">Edit Profile</h3>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="form-group">
                    <label className="float-left" htmlFor="emailInput">
                      New Email
                    </label>
                    <input
                      id="emailInput"
                      type="email"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="usernameInput">
                      New Username
                    </label>
                    <input
                      id="usernameInput"
                      type="text"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="passwordInput">
                      Password or New Password If you want to change.
                    </label>
                    <input
                      id="passwordInput"
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 float-left">Profile Verification</h3>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="form-group">
                    <label className="float-left" htmlFor="mobileInput">
                      Mobile Number
                    </label>
                    <input
                      id="mobileInput"
                      type="tel"
                      className="form-control rounded-0"
                    />
                  </div>
                  <div className="container text-center">
                    <button type="button" className="btn btn-primary btn-sm">
                      Send OTP
                    </button>
                  </div>
                  <div className="form-group">
                    <label className="float-left" htmlFor="otpInput">
                      OTP
                    </label>
                    <input
                      id="otpInput"
                      type="text"
                      className="form-control rounded-0"
                    />
                  </div>
                  <button type="submit" className="btn btn-success float-right">
                    Verify
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
