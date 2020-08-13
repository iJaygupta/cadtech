import React from "react";
import PageJumbotron from "../utils/PageJumbotron";
import User from "../assets/img/user.jpeg";
import TeamCard from "../utils/TeamCard";
import CarouselUtil from "../utils/CarouselUtil";
import HeadingTitle from "../utils/HeadingTitle";
import  Cardimage from '../assets//img/about-plan.jpg'

const USER_LIST = [
  {
    id: 1,
    name: "James Bond",
    profile: "Web Developer",
    icon: User,
    facebook: "google.com",
    twitter: "google.com",
    instagram: "google.com",
    desc: "sjkka  ajjka sakja ajjal akjja ",
  },
  {
    id: 2,
    name: "Ravi Dubey",
    profile: "Web Developer",
    icon: User,
    facebook: "google.com",
    twitter: "google.com",
    instagram: "google.com",
    desc: "sjkka  ajjka sakja ajjal akjja ",
  },
  // {id: 3 , name: 'Gaurav ' , profile: 'Web Developer' , icon: User, facebook : 'google.com' , twitter: 'google.com' , instagram: 'google.com' , desc: 'sjkka  ajjka sakja ajjal akjja '}
];

const AboutUsView = () => {
  return (
    <div className="about-us-view">
      <PageJumbotron headerTitle={"About Us"} />
      <section id="about-comp" className="about section-bg">
        <div className="container">
        <HeadingTitle
            title={"About Company"}
            description={
              "Magnam dolores commodi suscipit. Necessitatibus eius consequatur"
            }
            titleColor={"#213b52"}
          />
          <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div className="col-xl-7 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
              <div className="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay="100">
                  Voluptatem dignissimos provident 
                </h3>
                <p data-aos="fade-in">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="fas fa-receipt"></i>
                    <h4>
                      <a href="#">Corporis voluptates</a>
                    </h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="fas fa-cube"></i>
                    <h4>
                      <a href="#">Ullamco laboris nisi</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="far fa-images"></i>
                    <h4>
                      <a href="#">Labore consequatur</a>
                    </h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="fas fa-shield-alt"></i>
                    <h4>
                      <a href="#">Beatae veritatis</a>
                    </h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    <section id="about">
      <div className="container" data-aos="fade-up">
      <HeadingTitle
            title={"Our Mission & Vision"}
            description={
              "Magnam dolores commodi suscipit. Necessitatibus eius consequatur"
            }
            titleColor={"#fff"}
          />
        <div className="row about-cols">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="about-col">
              <div className="img">
                <img src={Cardimage} alt="" className="img-fluid" />
                <div className="icon"><i className="fas fa-tachometer-alt"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Mission</a></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="about-col">
              <div className="img">
                <img src={Cardimage}  alt="" className="img-fluid" />
                <div className="icon"><i className="far fa-list-alt"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Plan</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="about-col">
              <div className="img">
                <img src={Cardimage}  alt="" className="img-fluid" />
                <div className="icon"><i className="far fa-eye"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Vision</a></h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      <section id="team-profile-section">
        <div className="container">
          <HeadingTitle
            title={"Our Team"}
            description={
              "Magnam dolores commodi suscipit. Necessitatibus eius consequatur"
            }
            titleColor={"#213b52"}
          />
          <div className="card-wrapper">
            {/* <CarouselUtil> </CarouselUtil> */}
            {USER_LIST.map((user, index) => {
              return (
                <>
                  <TeamCard key={index} />
                </>
              );
            })}
            {/* </CarouselUtil> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsView;
