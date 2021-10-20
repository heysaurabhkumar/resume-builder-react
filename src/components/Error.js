import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h1 className="mt-2">Error! Page not found.</h1>
      <p>Enter valid url or Go back to Home Page.</p>
      <Link className="btn btn-primary" to="/home">
        Home
      </Link>
    </>
  );
}
