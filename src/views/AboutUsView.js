import React, { Component } from "react";
import PageJumbotron from "../utils/PageJumbotron";
import User from "../assets/img/jay.jpg";
import TeamCard from "../utils/TeamCard";
import CarouselUtil from "../utils/CarouselUtil";
import HeadingTitle from "../utils/HeadingTitle";
import Cardimage from '../assets//img/about-plan.jpg'
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
    console.log(this.state.aboutUs)
    return (
      <div className="about-us-view">
        <PageJumbotron headerTitle={"About Us"} />
        <section id="about-comp" className="about section-bg">
          <div className="container">
            <HeadingTitle
              title={"About Company"}
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
                      <i className="fas fa-phone-square "></i>
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
                    <img src={Cardimage} alt="" className="img-fluid" />
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
                    <img src={Cardimage} alt="" className="img-fluid" />
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
