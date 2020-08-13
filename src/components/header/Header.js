import React, { useState } from "react";
// import logo from "../assets/img/logo.svg";
import { NavLink, Link } from "react-router-dom";

const HEADER_LIST = [
  {
    id: 1,
    name: "Home",
    link: "/home"
  },
  {
    id: 2,
    name: "About",
    link: "/about-us"
  },
  {
    id: 3,
    name: "Npr",
    link: "/number-plate-recognition"
  },
  {
    id: 4,
    name: "StudioLight",
    link: "/studio-light"
  },
  {
    id: 5,
    name: "Courses",
    link: "/services"
  },
  {
    id: 6,
    name: "Blogs",
    link: "/blogs"
  },
  {
    id: 7,
    name: "Contact",
    link: "/contact-us"
  }
];

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const closeMobileMenu = () => setNavClass(false);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add("header-nav-open");
    } else {
      document.body.classList.remove("header-nav-open");
    }
  };
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            {/* <img src={logo} alt="" /> */}
            LOGO
          </div>
          <div
            className={`${
              menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"
              }`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? "header-nav header-mobile-nav" : "header-nav"
              }`}
          >
            {HEADER_LIST.map(data => (
              <li key={data.id} className="header-nav-item">
                <Link to={data.link}> <span className="header-list-name" onClick={closeMobileMenu}>{data.name}</span> </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
