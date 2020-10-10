import React from 'react'
import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Full Address</h3>
              <p>
                T-4, 1st floor,Shivalik Nagar, Near ATM Chowk, BHEL, Ranipur  <br />
                Haridwar (Uttrakhand)<br />
                India <br /><br />
                <strong>Phone:</strong>+91 9084868584 <br/> +1 6678 254445 41 <br />
                <strong>Email:</strong> cadtechprofessionals@gmail.com <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link> </li>
                <li> <Link to="/courses">Courses</Link></li>
                <li><Link to="/profile">Products</Link></li>
                <li> <Link to="/contact-us">Contactus</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/home">Artificial Intelligence</Link></li>
                <li><Link to="/home">Mobile Application</Link></li>
                <li><Link to="/home">Web Application</Link></li>
                <li><Link to="/home">Product Management</Link></li>
                <li><Link to="/home">Marketing</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Recent Blogs</h4>
              <p>I Think Self-Awarness Is The Most Important Thing Towards Being Champion</p>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-md-flex py-4">

          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; 2020@Copyright <strong><span>NeuronLabs</span></strong>. All Rights Reserved
  </div>
            <div className="credits">
              Designed by <a href="https://www.google.com/">Jay Gupta</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://www.google.com/" className="twitter"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.google.com/" className="facebook"><i className="fab fa-twitter"></i></a>
            <a href="https://www.google.com/" className="instagram"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.google.com/" className="linkedin"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
