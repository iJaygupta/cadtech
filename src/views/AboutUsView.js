import React, { Component } from "react";
import PageJumbotron from "../utils/PageJumbotron";
import User from "../assets/img/jay.jpg";
import TeamCard from "../utils/TeamCard";
import CarouselUtil from "../utils/CarouselUtil";
import HeadingTitle from "../utils/HeadingTitle";
import Cardimage1 from '../assets//img/john.jpg'
import Cardimage2 from '../assets//img/kelly.jpg'
import Cardimage3 from '../assets//img/david.jpg'
import { getLookUpData } from '../actions/lookUpAction';
import { getTeamMember } from '../actions/enquiryAction';


const USER_LIST = [
  {
    id: 1,
    name: "jay Gupta",
    profile: "Web Developer",
    icon: User,
    facebook: "google.com",
    twitter: "google.com",
    instagram: "google.com",
    desc: "sjkka  ajjka sakja ajjal akjja ",
  },
  {
    id: 2,
    name: "Jay Gupta",
    profile: "Full Stack  Developer",
    icon: User,
    facebook: "google.com",
    twitter: "google.com",
    instagram: "google.com",
    desc: "sjkka  ajjka sakja ajjal akjja ",
  },
  // {id: 3 , name: 'Gaurav ' , profile: 'Web Developer' , icon: User, facebook : 'google.com' , twitter: 'google.com' , instagram: 'google.com' , desc: 'sjkka  ajjka sakja ajjal akjja '}
];
export default class AboutUsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: {},
      teamMembers: [],
    }
  }

  componentDidMount() {
    getLookUpData((response) => {
      if (response && response.status == "OK") {
        let lookupData = response.data || []
        if (lookupData.length && lookupData[0].about_us) {
          this.setState({ aboutUs: lookupData[0].about_us })

        }
      }
    })
    getTeamMember((response) => {
      if (response && response.status == "OK") {
        this.setState({ teamMembers: response.data })
      }
    })


  }
  render() {
    return (
      <div className="about-us-view">
        <PageJumbotron headerTitle={"About Us"} />
        <section id="about-comp" className="about section-bg">
          <div className="container">
            <HeadingTitle
              title={"About cadtech"}
              description={
                this.state.aboutUs.bio
              }
              titleColor={"#213b52"}
            />
            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
              <div className="col-xl-7 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3 data-aos="fade-in" data-aos-delay="100">
                    GET IN TOUCH
              </h3>
                  <p data-aos="fade-in">
                    Have Something In Your Mind And Want To Make Real! Call Us Now!
              </p>
                  <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="fas fa-address-book"></i>
                      <h4>
                        <a href="#">OUR ADDRESS</a>
                      </h4>
                      <p>
                        {this.state.aboutUs.address}
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="fas fa-rotate-90 fa-phone-square "></i>
                      <h4>
                        <a href="#">PHONE NUMBER</a>
                      </h4>
                      <p>
                        {this.state.aboutUs.phone_number}
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="far fa-envelope"></i>
                      <h4>
                        <a href="#">Email</a>
                      </h4>
                      <p>
                        {this.state.aboutUs.email}

                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="fas fa-shield-alt"></i>
                      <h4>
                        <a href="#">More Details</a>
                      </h4>
                      <p>
                        {this.state.aboutUs.email}
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
                "Practice principles for excellence in teaching and learning"
              }
              titleColor={"#fff"}
            />
            <div className="row about-cols">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="about-col">
                  <div className="img">
                    <img src={Cardimage1} alt="" className="img-fluid" />
                    <div className="icon"><i className="fas fa-tachometer-alt"></i></div>
                  </div>
                  <h2 className="title"><a href="#">Our Mission</a></h2>
                  <p>
                    Our dynamic team serves the college community by providing training, research, and flexible support services. Through creative problem solving, collaboration, and reflection we provide an environment for growth in teaching and learning in an effort to best support our students, faculty and staff.
            </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="about-col">
                  <div className="img">
                    <img src={Cardimage3} alt="" className="img-fluid" />
                    <div className="icon"><i className="far fa-list-alt"></i></div>
                  </div>
                  <h2 className="title"><a href="#">Our Plan</a></h2>
                  <p>
                    It’s important to assess how students will be applying the information you’re teaching them. What are their various backgrounds, personal and professional goals? How can you make your course relevant to them and useful in fulfilling their goals? Think of scenarios, analogies and stories that will help them build a bridge between the content of your course and their real lives.
            </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="about-col">
                  <div className="img">
                    <img src={Cardimage2} alt="" className="img-fluid" />
                    <div className="icon"><i className="far fa-eye"></i></div>
                  </div>
                  <h2 className="title"><a href="#">Our Vision</a></h2>
                  <p>
                    When teachers can identify the values and beliefs at the centre of their practice, they have a frame of reference that helps them to evaluate their current practice. Mindsets change when teachers actively adjust their practice to ensure it is aligned with their core values and beliefs.
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
                "Evaluate the impact of our teaching"
              }
              titleColor={"#213b52"}
            />
            <div className="card-wrapper">
              {/* <CarouselUtil> </CarouselUtil> */}
              {this.state.teamMembers.map((member, index) => {
                return (
                  <>
                    <TeamCard data={member} />
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
}
