import React, { useEffect, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

import ResumeService from "../../../services/ResumeService";

export default function ResumeTemplate() {
  const [loading, setLoading] = useState(true);
  const [resumeData, setResumeData] = useState({});
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await ResumeService.template();
      if (res) {
        res.skills = res?.skills.split(",");
        res.languages = res?.languages.split(",");
        // console.log(res);
        setResumeData(res);
      }
      setLoading((loading) => !loading);
    }
    fetchData();
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
        <PDFExport
          ref={pdfExportComponent}
          paperSize="auto"
          margin={0}
          fileName={`Resume ${resumeData.fullname}`}
          author="Resume Builder"
        >
          <div id="resume" className="container body mt-3">
            <div className="row">
              <div className="col-md-3 py-5 background">
                <div className="text-center">
                  <img
                    src={resumeData?.profile}
                    alt="profile"
                    className="img-fluid myimg mb-2"
                  />

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
              <div className="col-md-9 py-5">
                <p className="text-center display-1 fw-bolder">
                  {resumeData?.fullname}
                </p>
                <div className="card mt-4">
                  <div className="card-header background">
                    <h3>Objective</h3>
                  </div>
                  <div className="card-body">
                    <p>{resumeData?.objective}</p>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header background">
                    <h3>Work Experience</h3>
                  </div>
                  <div className="card-body">
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
                  <div className="card-header background">
                    <h3>Projects</h3>
                  </div>
                  <div className="card-body">
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
                  <div className="card-header background">
                    <h3>Certifications</h3>
                  </div>
                  <div className="card-body">
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
                  <div className="card-header background">
                    <h3>Education</h3>
                  </div>
                  <div className="card-body">
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
        </PDFExport>

        <div className="container text-center mb-3">
          <button
            className="btn btn-success btn-lg"
            onClick={exportPDFWithComponent}
          >
            Download
          </button>
        </div>
      </>
    );
  }
}
