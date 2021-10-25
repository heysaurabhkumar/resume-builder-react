import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthService from "../../services/AuthService";
import OtpService from "../../services/OtpService";

export default function EditProfile() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    mobile: "",
    verified: false,
  });

  const [mobileVerify, setMobileVerify] = useState({
    mobile: "",
    otp: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleChangeMobile = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMobileVerify({ ...mobileVerify, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.edit(user);
    history.push("/profile");
  };

  const handleSendOtp = async () => {
    await OtpService.sendOtp();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    await OtpService.verifyOtp(mobileVerify);
    history.push("/profile");
  };

  useEffect(() => {
    async function fetchUser() {
      const res = await AuthService.profile();
      setUser(res);
      setMobileVerify((prev) => {
        return { ...prev, mobile: res.mobile };
      });
    }
    fetchUser();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 ">Edit Profile</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">New Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control rounded-0"
                      value={user.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">New Username</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="form-control rounded-0"
                      value={user.username || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      Password or New Password If you want to change.
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Enter password"
                      value={user.password || ""}
                      onChange={handleChange}
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
                <h3 className="mb-0 ">Profile Verification</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleVerifyOtp}>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      className="form-control rounded-0"
                      placeholder="Enter your mobile number"
                      value={mobileVerify.mobile || ""}
                      onChange={handleChangeMobile}
                    />
                  </div>
                  <div className="container text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </button>
                  </div>
                  <div className="form-group">
                    <label htmlFor="otp">OTP</label>
                    <input
                      id="otp"
                      type="text"
                      name="otp"
                      className="form-control rounded-0"
                      placeholder="Enter otp"
                      value={mobileVerify.otp || ""}
                      onChange={handleChangeMobile}
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
