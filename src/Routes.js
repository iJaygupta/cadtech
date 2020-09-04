import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactView from "./views/ContactView";
import AboutUsView from "./views/AboutUsView";
import CourseView from "./views/CourseView";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import BlogView from "./views/BlogView";
import NumberPlate from "./views/products/NumberPlate";
import StudioLight from "./views/products/StudioLight";
import Home from "./views/home/Home";
import Profile from "./components/profile/Profile";
import DisplayMsg from "./views/NotFound";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about-us" component={AboutUsView} />
      <Route exact path="/contact-us" component={ContactView} />
      <Route exact path="/courses" component={CourseView} />
      <Route exact path="/number-plate-recognition" component={NumberPlate} />
      <Route exact path="/studio-light" component={StudioLight} />
      <Route exact path="/blogs" component={BlogView} />
      <Route exact path="/profile" component={Profile} />
      <Route path="*" component={DisplayMsg} />
    </Switch>
  );
};

export default Routes;
