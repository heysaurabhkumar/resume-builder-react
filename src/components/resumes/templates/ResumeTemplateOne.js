import React, { useEffect, useState } from "react";
import ResumeService from "../../../services/ResumeService";

export default function ResumeTemplateOne() {
  const [resumeData, setResumeData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await ResumeService.template();
      res.skills = res?.skills.split(",");
      res.languages = res?.languages.split(",");
      // console.log(res);
      setResumeData(res);
    }
    fetchData();
  }, []);
  return (
    <>
      <div id="resume" className="container mt-3">
        <div className="row">
          <div className="col-md-5 py-5 bgleft">
            <div className="text-center">
              <img
                src={resumeData?.profile}
                alt="profile"
                className="img-fluid myimg mb-2"
              />
              <p className="text-center display-1 fw-bolder">
                {resumeData?.fullname}
              </p>
              <p>{resumeData?.position}</p>
            </div>
            <p className="text-break">
              <strong>Email:</strong> {resumeData?.email}
            </p>
            <p>
              <strong>Contact No.:</strong> {resumeData?.mobile}
            </p>
            <p className="new-line">
              <strong>Address:</strong> {resumeData?.address}
            </p>

            <hr />

            <h4>Objective</h4>

            <p>{resumeData?.objective}</p>

            <hr />
            <h4>Skills</h4>
            <ul>
              {resumeData?.skills?.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
            <hr />

            <h4>Social Links</h4>
            <div className="text-break">
              <p>
                <strong>LinkedIn:</strong> {resumeData?.linkedin}
              </p>
              <p>
                <strong>Facebook:</strong> {resumeData?.facebook}
              </p>
              <p>
                <strong>Instagram:</strong> {resumeData?.instagram}
              </p>
            </div>
            <hr />

            <h4>Languages</h4>
            <ul>
              {resumeData?.languages?.map((language, index) => {
                return <li key={index}>{language}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-7 py-5 bgright">
            <div className="card mt-4">
              <div className="card-header header-one">
                <h3>Work Experience</h3>
              </div>
              <div className="card-body body-one">
                <ul>
                  {resumeData?.experience?.map((item, index) => {
                    return (
                      <li key={index} className="new-line mt-2">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header header-one">
                <h3>Projects</h3>
              </div>
              <div className="card-body body-one">
                <ul>
                  {resumeData?.project?.map((item, index) => {
                    return (
                      <li key={index} className="new-line mt-2">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header header-one">
                <h3>Certifications</h3>
              </div>
              <div className="card-body body-one">
                <ul>
                  {resumeData?.certification?.map((item, index) => {
                    return (
                      <li key={index} className="new-line mt-2">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header header-one">
                <h3>Education</h3>
              </div>
              <div className="card-body body-one">
                <ul>
                  {resumeData?.education?.map((item, index) => {
                    return (
                      <li key={index} className="new-line mt-2">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mb-3">
        <button className="btn btn-primary btn-lg">Download</button>
      </div>
    </>
  );
}
