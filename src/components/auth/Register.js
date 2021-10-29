import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import lottie from "lottie-web";

import AuthService from "../../services/AuthService";

import { registerSchema } from "../../helpers/Validators";

export default function Register() {
  const history = useHistory();

  const container = useRef(null);

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
    window.location.reload(false);
  };

  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      history.push("/profile");
    }

    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../lottie/register.json"),
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div ref={container}></div>
          </div>
          <div className="col-md-6 mx-auto my-auto">
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
                      placeholder="Enter email"
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
                      placeholder="Enter username"
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
                      placeholder="Enter password"
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
                      placeholder="Confirm passwod"
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <div className="alert alert-danger mt-2">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-success float-right">
                    Register
                  </button>
                </form>
              </div>
            </div>
            <p className="mt-2">
              Already have an account. <Link to="/login">Click here</Link> for
              login.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
