import React, { useState, useEffect } from "react";
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
          <div className="card rounded-0">
            <div className="card-header">
              <h3 className="mb-0 ">
                User Profile
                <div className="verified mt-2">
                  <h6 className="">Verified Account</h6>
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
