import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import lottie from "lottie-web";

import AuthService from "../../services/AuthService";
import OtpService from "../../services/OtpService";

import { editSchema, mobileSchema } from "../../helpers/Validators";

export default function EditProfile() {
  const container = useRef(null);

  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   mobile: "",
  //   verified: false,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(editSchema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    setValue: setValue2,
    getValues,
  } = useForm({
    resolver: yupResolver(mobileSchema),
    mode: "onChange",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  // const [mobileVerify, setMobileVerify] = useState({
  //   mobile: "",
  //   otp: "",
  // });

  const history = useHistory();

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };

  // const handleChangeMobile = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setMobileVerify({ ...mobileVerify, [name]: value });
  // };

  const onSubmit = async (data) => {
    await AuthService.edit(data);
    history.push("/profile");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await AuthService.edit(user);
  //   history.push("/profile");
  // };

  const handleSendOtp = async () => {
    if (!getValues("mobile")) {
      setMobileError(true);
      setOtpSent(false);
    } else {
      const res = await OtpService.sendOtp();
      if (res.message) {
        setOtpSent(true);
        setMobileError(false);
      }
    }
  };

  const handleVerifyOtp = async (data) => {
    // e.preventDefault();
    const res = await OtpService.verifyOtp(data);
    if (res.message) {
      await swal("Verified", "Mobile verification successfull", "success");
    }
    history.push("/profile");
  };

  useEffect(() => {
    async function fetchUser() {
      const res = await AuthService.profile();
      // setUser(res);
      setValue("email", res.email, { shouldValidate: true });
      setValue("username", res.username, { shouldValidate: true });

      // setMobileVerify((prev) => {
      //   return { ...prev, mobile: res.mobile };
      // });
      setValue2("mobile", res.mobile, { shouldValidate: true });
      setLoading((loading) => !loading);
      lottie.loadAnimation({
        container: container.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../lottie/edit-profile.json"),
      });
    }
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 mx-auto">
              <div ref={container}></div>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="col-md-12 mt-3">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0 ">Edit Profile</h3>
                  </div>
                  <div className="card-body">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label htmlFor="email">New Email</label>
                        <input
                          id="email"
                          name="email"
                          className="form-control rounded-0"
                          {...register("email")}
                        />
                        {errors.email && (
                          <div className="alert alert-danger mt-2" role="alert">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="username">New Username</label>
                        <input
                          id="username"
                          name="username"
                          className="form-control rounded-0"
                          {...register("username")}
                        />
                        {errors.username && (
                          <div className="alert alert-danger mt-2" role="alert">
                            {errors.username.message}
                          </div>
                        )}
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
                          {...register("password")}
                        />
                        {errors.password && (
                          <div className="alert alert-danger mt-2" role="alert">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success float-right"
                      >
                        Update Profile
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3 mb-5">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0 ">Profile Verification</h3>
                  </div>
                  <div className="card-body">
                    <form
                      className="form"
                      onSubmit={handleSubmit2(handleVerifyOtp)}
                    >
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                          id="mobile"
                          name="mobile"
                          className="form-control rounded-0"
                          placeholder="Enter your mobile number"
                          {...register2("mobile")}
                        />
                        {errors2.mobile && (
                          <div className="alert alert-danger mt-2" role="alert">
                            {errors2.mobile.message}
                          </div>
                        )}
                      </div>
                      {mobileError && (
                        <div class="alert alert-danger mt-2">
                          Enter mobile number first.
                        </div>
                      )}
                      <div className="container text-center">
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          onClick={handleSendOtp}
                        >
                          Send OTP
                        </button>
                      </div>
                      {otpSent && (
                        <div class="alert alert-success mt-2">
                          Otp hass been sent to your mobile number.
                        </div>
                      )}

                      <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <input
                          id="otp"
                          name="otp"
                          className="form-control rounded-0"
                          placeholder="Enter otp"
                          {...register2("otp")}
                        />
                        {errors2.otp && (
                          <div className="alert alert-danger mt-2" role="alert">
                            {errors2.otp.message}
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success float-right"
                      >
                        Verify
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
