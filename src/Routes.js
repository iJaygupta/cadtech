import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactView from "./views/ContactView";
import AboutUsView from "./views/AboutUsView";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import BlogView from "./views/BlogView";
import StudentCorner from "./components/student-corner/StudentCorner";
import Services from "./views/products/Services";
import Home from "./views/home/Home";
import Profile from "./components/profile/Profile";
import Course from "./components/course/Course";
import CourseDetail from "./components/course/CourseDetail";
import Users from "./components/admin/users/Users";
import NotFound from "./views/NotFound";
import UserContext from "./context/userContext";
import ChangePassword from "./components/change-password/ChangePassword";


const Routes = () => {
  const { isAuth } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route path="/blogs" component={BlogView} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about-us" component={AboutUsView} />
      <Route exact path="/contact-us" component={ContactView} />
      <Route exact path="/courses" component={Course} />
      <Route exact path="/course/detail/:courseId" component={CourseDetail} />
      <Route exact path="/student-corner" component={StudentCorner} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/users" component={Users} />
      {/* <Route exact path="/student-certificates" component={certificates} /> */}
      <Route exact path="/change-password" component={ChangePassword} />
      {isAuth ? (
        <>
          <Route path="/profile" component={Profile} />
          <Route path="/blogs" component={BlogView} />
          <Route path="/logout" component={Logout} />
        </>
      )
        :
        <>
          <Route exact path="*" render={() => <Redirect to="/" />} />
        </>
      }
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
