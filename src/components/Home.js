import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthService from "../services/AuthService";

export default function Home() {
  const [display, setDisplay] = useState(false);

  const history = useHistory();
  const toLogin = () => {
    history.push("/login");
  };
  const toRegister = () => {
    history.push("/register");
  };

  const toResume = () => {
    history.push("/resume");
  };

  const toStart = () => {
    history.push("/resume");
  };

  useEffect(() => {
    setDisplay(AuthService.isLoggedIn());
  }, []);

  return (
    <>
      <div className="white-background">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-12 mar">
              <h1 className="display-4">
                Online CV Builder With Creative Templates.
              </h1>
              <p>
                Our Perfect resume builder takes the hassle out of resume
                writing. Choose from several templates and follow easy prompts
                to create the perfect job-ready resume.
              </p>
              {display ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={toStart}
                >
                  Get Started
                </button>
              ) : (
                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={toLogin}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mx-2"
                    onClick={toRegister}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
            <div className="col-12 col-lg-6 col-md-12 mar">
              <img
                className="home-resume"
                src="https://geeko.netlify.app/img/core-img/banner2.png"
                alt="resume"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-12 col-md-12 ">
            <h6 className="text-center">ONLINE RESUME BUILDER</h6>
            <h1 className="text-center">Win your dream job</h1>
          </div>
          <div className="col-12 col-lg-6 col-md-12 mar">
            <img className="icons" src={"/icons/document.png"} alt="document" />
            <h3>Create resume with ease</h3>
            <p>
              Build your resume online in minutes without even leaving your web
              browser.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-12 mar">
            <img className="icons" src={"/icons/check.png"} alt="document" />
            <h3>Professionally approved templates</h3>
            <p>
              Our well designed resume templates are approved by professionals.
              Your resume is ready in 5 minutes.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-12 mar">
            <img className="icons" src={"/icons/padlock.png"} alt="document" />
            <h3>We care about your data</h3>
            <p>
              Anything you share with us is well protected with our 256-bit SSL
              encryption.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-12 mar">
            <img className="icons" src={"/icons/download.png"} alt="document" />
            <h3>Download as PDF</h3>
            <p>
              Download your resume in PDF and other common formats with just a
              click.
            </p>
          </div>
        </div>
      </div>

      <div className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 mar align-items-center">
              <img
                className="home-resume"
                src="https://resumecat.com/_next/image?url=%2Fimg%2Fcompany%2Fresume-cat-resume.svg&w=640&q=75"
                alt="resume"
              />
            </div>
            <div className="col-12 col-lg-6 col-md-12 mar p-5">
              <h6>RESUME MAKER</h6>
              <h1>Every Great Career Begins with a Solid Resume</h1>
              <button
                type="button"
                onClick={toResume}
                className="btn btn-success"
              >
                Create my resume
              </button>
              <p className="mt-5">
                Before you ever step foot in a HR recruiter’s office to
                interview for that dream job, your resume is the first thing
                that crosses their desk. <br /> <br /> Because they can’t meet
                you firsthand to witness your witty personality, focused, driven
                work ethic, and ability to fit in well with any team, your
                resume has to do the talking for you. <br /> <br /> That’s why
                it’s essential that your resume properly expresses who you are,
                what you bring to the table, and why they should immediately
                pick up the phone and get you in the building. <br /> <br />{" "}
                With Resume Builder you can be sure that your resume isn’t just
                being added to the pile; but that it stands out and makes
                recruiters take notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-6 col-md-12 mar p-5">
            <h6>FREE RESUME TEMPLATES</h6>
            <h1>Make the Most of Your First Impression</h1>
            <button
              type="button"
              onClick={toResume}
              className="btn btn-success"
            >
              Create my resume
            </button>
            <p className="mt-5">
              Six seconds. That’s the average time recruiters spend looking at
              your resume. Especially in those high-powered jobs where hundreds
              of people are applying. <br />
              <br /> ResumeCat provides the support you need to create, format,
              and prepare your resume like a professional, so you can make every
              one of those seconds count. From white space to columns to
              easy-to-read titles and sections our tools can ensure you can fit
              your talents and aptitudes into each section with precision. More
              importantly, it’s fast, easy, and helps prepare you for your new
              career.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-12 mar align-items-center">
            <img
              className="home-resume"
              src="https://resumecat.com/_next/image?url=%2Fimg%2Fcompany%2Fresume-cat-interview.svg&w=640&q=75"
              alt="resume"
            />
          </div>
        </div>
      </div>

      <div className="white-background">
        <div className="row bottom align-items-center">
          <div className="col-12 col-lg-12 col-md-12 mar">
            <button
              type="button"
              onClick={toResume}
              className="btn btn-success btn-lg float-right mt-5"
            >
              Create my resume
            </button>
            <h1 className="display-4">Ready to dive in?</h1>
            <h1 className="display-4">Create your resume today.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
