import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import lottie from "lottie-web";

import AuthService from "../../services/AuthService";

import { forgotSchema } from "../../helpers/Validators";

export default function ForgotPassword() {
  const container = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const onSubmit = async (data) => {
    await AuthService.forgot(data);
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../lottie/forget-password.json"),
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
                <h3 className="mb-0">Forgot Password</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      className="form-control rounded-0"
                      placeholder="Enter registered email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <div className="alert alert-danger mt-2">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <h5 className="mt-3">
                    A password reset link will be sent to your email.
                  </h5>
                  <button type="submit" className="btn btn-success float-right">
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
