import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ResumeService from "../../services/ResumeService";

export default function ResumeForm() {
  const [loading, setLoading] = useState(true);
  const [resumeForm, setResumeForm] = useState({
    fullname: "",
    position: "",
    email: "",
    mobile: "",
    address: "",
    skills: "",
    profile: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    languages: "",
    objective: "",
    experience: [""],
    project: [""],
    certification: [""],
    education: [""],
  });

  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setResumeForm({ ...resumeForm, [name]: value });
  };

  const handleChangeExp = (e, index) => {
    resumeForm.experience[index] = e.target.value;
    setResumeForm({ ...resumeForm, experience: resumeForm.experience });
  };

  const addExpFields = () => {
    setResumeForm({
      ...resumeForm,
      experience: [...resumeForm.experience, ""],
    });
  };

  const removeExpFields = () => {
    const len = resumeForm.experience.length;
    resumeForm.experience.splice(len - 1, 1);
    setResumeForm({ ...resumeForm, experience: resumeForm.experience });
  };

  const handleChangePro = (e, index) => {
    resumeForm.project[index] = e.target.value;
    setResumeForm({ ...resumeForm, project: resumeForm.project });
  };

  const addProFields = () => {
    setResumeForm({
      ...resumeForm,
      project: [...resumeForm.project, ""],
    });
  };

  const removeProFields = () => {
    const len = resumeForm.project.length;
    resumeForm.project.splice(len - 1, 1);
    setResumeForm({ ...resumeForm, project: resumeForm.project });
  };

  const handleChangeCer = (e, index) => {
    resumeForm.certification[index] = e.target.value;
    setResumeForm({ ...resumeForm, certification: resumeForm.certification });
  };

  const addCerFields = () => {
    setResumeForm({
      ...resumeForm,
      certification: [...resumeForm.certification, ""],
    });
  };

  const removeCerFields = () => {
    const len = resumeForm.certification.length;
    resumeForm.certification.splice(len - 1, 1);
    setResumeForm({ ...resumeForm, certification: resumeForm.certification });
  };

  const handleChangeEdu = (e, index) => {
    resumeForm.education[index] = e.target.value;
    setResumeForm({ ...resumeForm, education: resumeForm.education });
  };

  const addEduFields = () => {
    setResumeForm({
      ...resumeForm,
      education: [...resumeForm.education, ""],
    });
  };

  const removeEduFields = () => {
    const len = resumeForm.education.length;
    resumeForm.education.splice(len - 1, 1);
    setResumeForm({ ...resumeForm, education: resumeForm.education });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(resumeForm);
    await ResumeService.resume(resumeForm);
    history.push("/template");
  };

  useEffect(() => {
    async function fetchData() {
      const res = await ResumeService.template();
      // console.log(res);
      if (res) {
        setResumeForm(res);
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
        <div className="container">
          <div className="text-center mt-2">
            <h1>Resume Builder</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mt-2">
                <div className="form-group mt-3">
                  <label className="" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="form-control"
                    placeholder="Enter full name"
                    value={resumeForm?.fullname}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="position">Current Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="form-control"
                    placeholder="Enter current position"
                    value={resumeForm?.position}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={resumeForm?.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile No</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter mobile number"
                    value={resumeForm?.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    className="form-control"
                    placeholder="Enter address"
                    value={resumeForm?.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="skills">Skills</label>
                  <textarea
                    id="skills"
                    name="skills"
                    rows="2"
                    className="form-control"
                    placeholder="Write your skills comma seperated"
                    value={resumeForm?.skills}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="profile">Enter your picture url</label>
                  <input
                    type="text"
                    id="profile"
                    name="profile"
                    placeholder="Write your profile url"
                    className="form-control"
                    value={resumeForm?.profile}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-secondary mt-3">Social Links</p>
                <div className="form-group mt-2">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="form-control"
                    placeholder="Enter linkedin profile url"
                    value={resumeForm?.linkedin}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    className="form-control"
                    placeholder="Enter facebook profile url"
                    value={resumeForm?.facebook}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    className="form-control"
                    placeholder="Enter instagram profile url"
                    value={resumeForm?.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="languages">Languages Speak</label>
                  <textarea
                    id="languages"
                    name="languages"
                    rows="1"
                    className="form-control"
                    placeholder="Write your languages comma seperated"
                    value={resumeForm?.languages}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="objective">Objective</label>
                  <textarea
                    id="objective"
                    name="objective"
                    rows="4"
                    className="form-control"
                    placeholder="Write your objective"
                    value={resumeForm?.objective}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="form-group mt-3">
                  <label>Experience</label>
                  {resumeForm?.experience.map((exp, index) => {
                    return (
                      <div key={index}>
                        <textarea
                          rows="2"
                          className="form-control mt-2"
                          placeholder="Write your experience"
                          value={exp}
                          onChange={(e) => handleChangeExp(e, index)}
                        ></textarea>
                      </div>
                    );
                  })}
                  <div className="container text-center">
                    <button
                      type="button"
                      onClick={addExpFields}
                      className="btn btn-success btn-sm mx-2"
                    >
                      Add Experience
                    </button>
                    <button
                      type="button"
                      onClick={removeExpFields}
                      className="btn btn-danger btn-sm mx-2"
                    >
                      Remove Experience
                    </button>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label>Projects</label>
                  {resumeForm?.project.map((pro, index) => {
                    return (
                      <div key={index}>
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder="Write your project"
                          value={pro}
                          onChange={(e) => handleChangePro(e, index)}
                        ></textarea>
                      </div>
                    );
                  })}
                  <div className="container text-center">
                    <button
                      type="button"
                      onClick={addProFields}
                      className="btn btn-success btn-sm mx-2"
                    >
                      Add Project
                    </button>
                    <button
                      type="button"
                      onClick={removeProFields}
                      className="btn btn-danger btn-sm mx-2"
                    >
                      Remove Project
                    </button>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label>Certifications</label>
                  {resumeForm?.certification.map((cer, index) => {
                    return (
                      <div key={index}>
                        <textarea
                          rows="2"
                          className="form-control mt-2"
                          placeholder="Write your certification"
                          value={cer}
                          onChange={(e) => handleChangeCer(e, index)}
                        ></textarea>
                      </div>
                    );
                  })}
                  <div className="container text-center">
                    <button
                      type="button"
                      onClick={addCerFields}
                      className="btn btn-success btn-sm mx-2"
                    >
                      Add Certification
                    </button>
                    <button
                      type="button"
                      onClick={removeCerFields}
                      className="btn btn-danger btn-sm mx-2"
                    >
                      Remove Certification
                    </button>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label>Educations</label>
                  {resumeForm?.education.map((edu, index) => {
                    return (
                      <div key={index}>
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder="Write your edcation"
                          value={edu}
                          onChange={(e) => handleChangeEdu(e, index)}
                        ></textarea>
                      </div>
                    );
                  })}
                  <div className="container text-center">
                    <button
                      type="button"
                      onClick={addEduFields}
                      className="btn btn-success btn-sm mx-2"
                    >
                      Add Education
                    </button>
                    <button
                      type="button"
                      onClick={removeEduFields}
                      className="btn btn-danger btn-sm mx-2"
                    >
                      Remove Education
                    </button>
                  </div>
                </div>
              </div>
              <div className="container text-center m-2">
                <button type="submit" className="btn btn-success btn-lg">
                  Save Resume
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
