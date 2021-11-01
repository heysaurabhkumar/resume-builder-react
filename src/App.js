import "./App.css";

import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Error from "./components/Error";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import ForgotPassword from "./components/auth/ForgotPassword";
// import ResetPassword from "./components/auth/ResetPassword";
// import Profile from "./components/users/Profile";
// import EditProfile from "./components/users/EditProfile";
// import ResumeForm from "./components/resumes/ResumeForm";
// import ViewAllTemplates from "./components/resumes/ViewAllTemplates";
// import TemplateOne from "./components/resumes/templates/ResumeTemplate";
// import TemplateTwo from "./components/resumes/templates/ResumeTemplateOne";

import axios from "axios";
import AuthService from "./services/AuthService";

import ProtectedRoute from "./services/ProtectedRoute";

const Home = lazy(() => import("./components/Home"));
const Error = lazy(() => import("./components/Error"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));
const Profile = lazy(() => import("./components/users/Profile"));
const EditProfile = lazy(() => import("./components/users/EditProfile"));
const ResumeForm = lazy(() => import("./components/resumes/ResumeForm"));
const ViewAllTemplates = lazy(() =>
  import("./components/resumes/ViewAllTemplates")
);
const TemplateOne = lazy(() =>
  import("./components/resumes/templates/ResumeTemplate")
);
const TemplateTwo = lazy(() =>
  import("./components/resumes/templates/ResumeTemplateOne")
);

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
        <Suspense
          fallback={
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/home" component={Home} /> */}
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
            <ProtectedRoute
              exact
              path="/template"
              component={ViewAllTemplates}
            />
            <ProtectedRoute
              exact
              path="/template-one"
              component={TemplateOne}
            />
            <ProtectedRoute
              exact
              path="/template-two"
              component={TemplateTwo}
            />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
        <div className="mt-5"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
