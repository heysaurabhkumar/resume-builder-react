import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

import AuthService from "../../services/AuthService";

export default function Profile() {
  const container = useRef(null);

  const [user, setUser] = useState({ email: "", usename: "", verified: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const res = await AuthService.profile();
      setUser(res);
      setLoading((loading) => !loading);
      lottie.loadAnimation({
        container: container.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../lottie/profile.json"),
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
              <div className="w-75" ref={container}></div>
            </div>
            <div className="col-md-6 mx-auto my-auto">
              {!user?.verified && (
                <div className="alert alert-danger">
                  <h2>
                    Mobile is not verified! Click here to verify now{" "}
                    <Link to="/edit">here</Link>
                  </h2>
                </div>
              )}
              <div className="card rounded-0">
                <div className="card-header">
                  <h3 className="mb-0 ">
                    User Profile
                    <div className="verified mt-2">
                      {user?.verified && <h6>Verified Account</h6>}
                    </div>
                  </h3>
                </div>
                <div className="card-body">
                  <img
                    className="w-25 float-right"
                    src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                    alt="profile"
                  />
                  <h5 className="card-title">Hello {user.username}</h5>
                  <br />
                  <p className="card-text">Email: {user.email}</p>
                  <br />
                  <p className="card-text">Mobile: {user.mobile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
