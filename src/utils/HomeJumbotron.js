import React from 'react'
import  headerImage from '../assets/img/home-jumotron2.gif'
import {NavLink} from 'react-router-dom'
const HomeJumbotron = () => {
    return (
        <section id="home-jumbotron" class="d-flex align-items-center">
          <div class="container-fluid nav_bg">
            <div class="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                      <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                          <h1>Better Solutions For Your Business</h1>
                           <h2>We are team of talanted designers making websites with Bootstrap</h2>
                           <div class="d-lg-flex">
                             <NavLink to="/about-us" class="btn-get-started scrollto">Get Started</NavLink>
                             {/* <NavLink className="secondary"> Watch Video <i class="icofont-play-alt-2"></i></NavLink> */}
                            </div>
                       </div>
                      <div class="col-lg-6 order-1 order-lg-2 hero-img">
                         <img src={headerImage} class="img-fluid animated" alt="home-img" />
                       </div>
                    </div>
                </div>
            </div>
          </div>
      
        </section>
    )
}

export default HomeJumbotron
