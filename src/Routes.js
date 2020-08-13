import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactView from "./views/ContactView";
import AboutUsView from "./views/AboutUsView";
import ServiceView from "./views/ServiceView";
// import ProductView from "./views/ProductView";
import BlogView from "./views/BlogView";
import NumberPlate from "./views/products/NumberPlate";
import StudioLight from "./views/products/StudioLight";
import Home from "./views/home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={AboutUsView} />
      <Route exact path="/contact-us" component={ContactView} />
      <Route exact path="/services" component={ServiceView} />
      <Route exact path="/number-plate-recognition" component={NumberPlate} />
      <Route exact path="/studio-light" component={StudioLight} />
      <Route exact path="/blogs" component={BlogView} />
      <Route component={() => 404} />
    </Switch>
  );
};

export default Routes;
