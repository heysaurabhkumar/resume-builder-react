import "./App.css";

// import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Profile from "./components/users/Profile";
import EditProfile from "./components/users/EditProfile";
import ResumeForm from "./components/resumes/ResumeForm";
import ViewAllTemplates from "./components/resumes/ViewAllTemplates";
import TemplateOne from "./components/resumes/templates/ResumeTemplate";
import TemplateTwo from "./components/resumes/templates/ResumeTemplateOne";

import axios from "axios";
import AuthService from "./services/AuthService";

import ProtectedRoute from "./services/ProtectedRoute";

axios.interceptors.request.use((request) => {
  request.headers.common.Authorization = `Bearer ${AuthService.getToken()}`;
  // console.log(request);
  return request;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/reset-password/:id/:token"
            component={ResetPassword}
          />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/edit" component={EditProfile} />
          <ProtectedRoute exact path="/resume" component={ResumeForm} />
          <ProtectedRoute exact path="/template" component={ViewAllTemplates} />
          <ProtectedRoute exact path="/template-one" component={TemplateOne} />
          <ProtectedRoute exact path="/template-two" component={TemplateTwo} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
