import React, { useState, useContext } from "react";
// import logo from "../assets/img/cadtech.jpg";
import { NavLink, Link } from "react-router-dom";
import UserContext from '../../context/userContext'



const PUBLIC_HEADER_LIST = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Courses",
    link: "/courses",
  },
  {
    id: 3,
    name: "Student Corner",
    link: "/student-corner",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
  {
    id: 5,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 7,
    name: "Register",
    link: "/register",
  },
  {
    id: 8,
    name: "Login",
    link: "/login",
  }
];

const PRIVATE_HEADER_LIST = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Courses",
    link: "/courses",
  },
  {
    id: 3,
    name: "Student Corner",
    link: "/student-corner",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
  {
    id: 5,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 7,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 8,
    name: "Logout",
    link: "/logout",
  }
];

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  let [isAuthModal, setIsAuthModal] = useState(false);
  const { isAuth } = useContext(UserContext)

  const HEADER_LIST = isAuth ? PRIVATE_HEADER_LIST : PUBLIC_HEADER_LIST;

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

  const showModal = () => {
    setIsAuthModal(true);
  };

  const hideModal = () => {
    setIsAuthModal(false);
  };


  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            {/* <img src={"../assets/img/cadtech.jpg"} alt="" /> */}
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
