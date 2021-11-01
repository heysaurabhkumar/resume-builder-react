import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import lottie from "lottie-web";

import { OldSocialLogin as SocialLogin } from "react-social-login";

import AuthService from "../../services/AuthService";

import { loginSchema } from "../../helpers/Validators";

export default function Login() {
  const history = useHistory();

  const container = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await AuthService.login(data);
    history.push("/profile");
    window.location.reload(false);
  };

  const handleSocialLogin = async (user, err) => {
    if (user) {
      // console.log("sucess", user._token.idToken);
      const res = await AuthService.google({ token: user._token.idToken });
      // console.log(res.data.token);
      if (res.data) {
        let token = res.data.token;
        localStorage.setItem("token", token);
        if (res.data.firstTime) {
          alert("Set your password first");
          history.push("/edit");
          window.location.reload(false);

          return;
        }
        history.push("/profile");
        window.location.reload(false);
      }
    } else {
      console.log("failed", err);
    }
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
      animationData: require("../../lottie/login.json"),
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
            <p className="mt-2 float-right">
              Need an account? <Link to="/register">Click here</Link> for
              register.
            </p>
            <br />
            <div className="card rounded-0 w-100">
              <div className="card-header">
                <h3 className="mb-0 ">Login</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control rounded-0"
                      placeholder="Enter email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <div className="alert alert-danger mt-2" role="alert">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
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
                  <Link className=" mt-10" to="/forgot-password">
                    Forgot Password
                  </Link>
                  <button type="submit" className="btn btn-success float-right">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center mt-3">Or</p>
            <SocialLogin
              provider="google"
              appId="823617306530-0b264uv74c5jm32i3lmr9ipmii3hah72.apps.googleusercontent.com"
              callback={handleSocialLogin}
            >
              <button className="google btn1" type="button">
                Continue with Google
              </button>
            </SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
}
