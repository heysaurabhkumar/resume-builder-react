import React, { useState } from "react";

export default function ResumeForm() {
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
    experience: "",
    project: "",
    certification: "",
    education: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setResumeForm({ ...resumeForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resumeForm);
  };
  return (
    <>
      <div className="container">
        <div className="container text-center mt-2">
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
                  value={resumeForm.fullname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="position">
                  Current Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="form-control"
                  placeholder="Enter current position"
                  value={resumeForm.position}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={resumeForm.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="mobile">
                  Mobile No
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter mobile number"
                  value={resumeForm.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="form-control"
                  placeholder="Enter address"
                  value={resumeForm.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="skills">
                  Skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="2"
                  className="form-control"
                  placeholder="Write your skills comma seperated"
                  value={resumeForm.skills}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="profile">
                  Enter your picture url
                </label>
                <input
                  type="text"
                  id="profile"
                  name="profile"
                  placeholder="Write your profile url"
                  className="form-control"
                  value={resumeForm.profile}
                  onChange={handleChange}
                />
              </div>
              <p className="text-secondary mt-3">Social Links</p>
              <div className="form-group mt-2">
                <label className="" htmlFor="linkedin">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  className="form-control"
                  placeholder="Enter linkedin profile url"
                  value={resumeForm.linkedin}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="facebook">
                  Facebook
                </label>
                <input
                  type="text"
                  id="facebook"
                  name="facebook"
                  className="form-control"
                  placeholder="Enter facebook profile url"
                  value={resumeForm.facebook}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="instagram">
                  Instagram
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  className="form-control"
                  placeholder="Enter instagram profile url"
                  value={resumeForm.instagram}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="languages">
                  Languages Speak
                </label>
                <textarea
                  id="languages"
                  name="languages"
                  rows="1"
                  className="form-control"
                  placeholder="Write your languages comma seperated"
                  value={resumeForm.languages}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="objective">
                  Objective
                </label>
                <textarea
                  id="objective"
                  name="objective"
                  rows="4"
                  className="form-control"
                  placeholder="Write your objective"
                  value={resumeForm.objective}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="form-group mt-3">
                <label className="" htmlFor="experience">
                  Experience
                </label>
                <textarea
                  rows="2"
                  className="form-control mt-2"
                  placeholder="Write your experience"
                ></textarea>
                <div className="container text-center">
                  <button type="button" className="btn btn-success btn-sm mx-2">
                    Add Experience
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mx-2">
                    Remove Experience
                  </button>
                </div>
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="projectInput">
                  Projects
                </label>
                <textarea
                  rows="3"
                  className="form-control mt-2"
                  placeholder="Write your project"
                ></textarea>
                <div className="container text-center">
                  <button type="button" className="btn btn-success btn-sm mx-2">
                    Add Project
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mx-2">
                    Remove Project
                  </button>
                </div>
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="certificateInput">
                  Certifications
                </label>
                <textarea
                  rows="2"
                  className="form-control mt-2"
                  placeholder="Write your certification"
                ></textarea>

                <div className="container text-center">
                  <button type="button" className="btn btn-success btn-sm mx-2">
                    Add Certification
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mx-2">
                    Remove Certification
                  </button>
                </div>
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="educationInput">
                  Educations
                </label>
                <textarea
                  rows="3"
                  className="form-control mt-2"
                  placeholder="Write your edcation"
                ></textarea>

                <div className="container text-center">
                  <button type="button" className="btn btn-success btn-sm mx-2">
                    Add Education
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mx-2">
                    Remove Education
                  </button>
                </div>
              </div>
            </div>
            <div className="container text-center m-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Save Resume
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
