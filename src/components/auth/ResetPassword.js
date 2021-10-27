import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthService from "../../services/AuthService";

import { resetSchema } from "../../helpers/Validators";

export default function ResetPassword() {
  const history = useHistory();
  const { id, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetSchema),
  });

  const onSubmit = async (data) => {
    AuthService.reset({ ...data, id, token });
    history.push("/login");
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
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Enter new Password."
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
                      placeholder="Confirm Password."
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <div className="alert alert-danger mt-2">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
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
