import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default function ResetPassword() {
  const { id, token } = useParams();
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
    id: id,
    token: token,
  });

  // console.log(id, token);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AuthService.reset(data);
    console.log(res);
  };
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0 ">Reset Password</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="" htmlFor="passwordInput">
                      New Password
                    </label>
                    <input
                      required
                      id="passwordInput"
                      name="password"
                      type="password"
                      className="form-control rounded-0"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="confirmPasswordInput">
                      Confirm Password
                    </label>
                    <input
                      required
                      id="confirmPasswordInput"
                      name="confirmPassword"
                      type="password"
                      className="form-control rounded-0"
                      value={data.confirmPassword}
                      onChange={handleChange}
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
