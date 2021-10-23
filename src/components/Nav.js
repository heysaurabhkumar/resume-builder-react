import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Nav() {
  const [loggedin, setLoggedin] = useState(false);

  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    AuthService.logout();
    history.push("/login");
  };

  useEffect(() => {
    setLoggedin(AuthService.isLoggedIn());
  }, [loggedin]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Resume Builder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              {loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/template">
                      My Resume
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/resume">
                      Edit Resume
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {!loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
              {loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/edit">
                      Edit Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout" onClick={logout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
