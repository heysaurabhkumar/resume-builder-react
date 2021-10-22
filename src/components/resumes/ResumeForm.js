import React from "react";

export default function ResumeForm() {
  return (
    <>
      <div className="container">
        <div className="container text-center mt-2">
          <h1>Resume Builder</h1>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6 mt-2">
              <div className="form-group mt-3">
                <label className="" htmlFor="fullNameInput">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullNameInput"
                  className="form-control"
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="positionInput">
                  Current Position
                </label>
                <input
                  type="text"
                  id="positionInput"
                  className="form-control"
                  placeholder="Enter current position"
                />
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="mobileInput">
                  Mobile No
                </label>
                <input
                  type="text"
                  id="mobileInput"
                  className="form-control"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="addressInput">
                  Address
                </label>
                <textarea
                  id="addressInput"
                  rows="3"
                  className="form-control"
                  placeholder="Enter address"
                ></textarea>
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="skillsInput">
                  Skills
                </label>
                <textarea
                  id="skillsInput"
                  rows="2"
                  className="form-control"
                  placeholder="Write your skills comma seperated"
                ></textarea>
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="profileInput">
                  Enter your picture url
                </label>
                <input
                  type="url"
                  id="profileInput"
                  placeholder="Write your profile url"
                  className="form-control"
                />
              </div>
              <p className="text-secondary mt-3">Social Links</p>
              <div className="form-group mt-2">
                <label className="" htmlFor="linkedInput">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedInput"
                  className="form-control"
                  placeholder="Enter linkedin profile url"
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="facebookInput">
                  Facebook
                </label>
                <input
                  type="text"
                  id="facebookInput"
                  className="form-control"
                  placeholder="Enter facebook profile url"
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="instagramInput">
                  Instagram
                </label>
                <input
                  type="text"
                  id="instagramInput"
                  className="form-control"
                  placeholder="Enter instagram profile url"
                />
              </div>
              <div className="form-group mt-2">
                <label className="" htmlFor="languageInput">
                  Languages Speak
                </label>
                <textarea
                  id="languageInput"
                  rows="1"
                  className="form-control"
                  placeholder="Write your languages comma seperated"
                ></textarea>
              </div>

              <div className="form-group mt-2">
                <label className="" htmlFor="objectiveInput">
                  Objective
                </label>
                <textarea
                  id="objectiveInput"
                  rows="4"
                  className="form-control"
                  placeholder="Write your objective"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="form-group mt-3">
                <label className="" htmlFor="experienceInput">
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
