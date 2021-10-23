import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">Error! Page not found.</h1>
        <p>Enter valid url or Go back to Home Page.</p>
        <Link className="btn btn-primary" to="/home">
          Home
        </Link>
      </div>
    </>
  );
}
