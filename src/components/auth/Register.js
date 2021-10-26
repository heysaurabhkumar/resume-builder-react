import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../../services/AuthService";

import { registerSchema } from "../../helpers/Validators";

export default function Register() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    await AuthService.register(data);
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
                <h3 className="mb-0 ">Register</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      className="form-control rounded-0"
                      placeholder="Enter email."
                      {...register("email")}
                    />
                    {errors.email && (
                      <div className="alert alert-danger mt-2">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      className="form-control rounded-0"
                      placeholder="Enter username."
                      {...register("username")}
                    />
                    {errors.username && (
                      <div className="alert alert-danger mt-2">
                        {errors.username.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Enter password."
                      {...register("password")}
                    />
                    {errors.password && (
                      <div className="alert alert-danger mt-2">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Confirm passwod."
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <div className="alert alert-danger mt-2">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
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
