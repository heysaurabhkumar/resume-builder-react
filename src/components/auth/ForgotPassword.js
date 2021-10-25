import React, { useState } from "react";
import AuthService from "../../services/AuthService";

export default function ForgotPassword() {
  const [forgotData, setForgotData] = useState({ email: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForgotData({ ...forgotData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AuthService.forgot(forgotData);
    console.log(res);
  };
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0">Forgot Password</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control rounded-0"
                      placeholder="Enter registered email"
                      value={forgotData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <h5 className="mt-3">
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
