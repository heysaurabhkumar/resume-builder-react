import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default function Profile() {
  const [user, setUser] = useState({ email: "", usename: "", verified: false });

  useEffect(() => {
    async function fetchUser() {
      const res = await AuthService.profile();
      setUser(res);
    }
    fetchUser();
  }, []);
  return (
    <>
      <div className="row pt-5">
        <div className="col-md-6 mx-auto">
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
              <h5 className="card-title">Hello {user.username}</h5>
              <br />
              <p className="card-text">Email: {user.email}</p>
              <br />
              <p className="card-text">Mobile: {user.mobile}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
