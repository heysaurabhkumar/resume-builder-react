import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllTemplates() {
  return (
    <>
      <div className="container text-center">
        <h1 className="mt-3">Select Template</h1>
        <div className="row mb-5">
          <div className="col-md-6 mt-3">
            <Link to="/template-one">
              <img
                className="template"
                src={"../../assests/images/resume-templates/template.jpg"}
                alt="template-one"
              />
            </Link>
          </div>
          <div className="col-md-6 mt-3">
            <Link to="/template-two">
              <img
                className="template"
                src={"../../assests/images/resume-templates/template1.jpg"}
                alt="template-two"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
