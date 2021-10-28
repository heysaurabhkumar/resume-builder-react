import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

export default function Error() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/error.json"),
    });
  }, []);
  return (
    <>
      <div className="container text-center">
        <div className="col-md-6 mx-auto">
          <div ref={container}></div>
        </div>
        <p>Enter valid url or Go back to Home Page.</p>
        <Link className="btn btn-success" to="/home">
          Home
        </Link>
      </div>
    </>
  );
}
