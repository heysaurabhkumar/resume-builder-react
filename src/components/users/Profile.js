import React from "react";

export default function Profile() {
  return (
    <>
      <div className="row pt-5">
        <div className="col-md-6 mx-auto">
          <div className="card rounded-0">
            <div className="card-header">
              <h3 className="mb-0 float-left">
                User Profile
                <div className="verified mt-2">
                  <h6 className="float-left">Verified Account</h6>
                </div>
              </h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Hello</h5>
              <br />
              <p className="card-text">Email:</p>
              <br />
              <p className="card-text">Mobile:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
