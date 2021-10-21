import "./App.css";

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/edit">
            <EditProfile />
          </Route>
          <Route exact path="/resume">
            <ResumeForm />
          </Route>
          <Route exact path="/template">
            <ViewAllTemplates />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
