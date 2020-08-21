import React from "react";
import Subscribe from '../../components/footer/Subscribe';
import HomeJumbotron from "../../utils/HomeJumbotron";
import HomeServiceCard from "../../utils/HomeServiceCard";
import ServiceImage1 from '../../assets//img/section-jumotron-2.jpg';
import HeaderSlider from "../../components/headerJumbotron/HeaderSlider";
import { Link } from 'react-router-dom';
import ProductCardHeading from "../../utils/ProductCardHeading";
import { TestimonialContents, SERVICE_LIST } from './HomeContent';
import SlickSliderWrapper from "../../components/slick-slider/SlickSliderWrapper";
import TeamCard from "../../utils/TeamCard";
import TestimonialsCard from "../../components/TestimonialsCard";
import ClientSection from "../../utils/ClientSection";




const Home = () => {
  return (
    <>
      {/* <HomeJumbotron /> */}
      <HeaderSlider />
      {/*  SERVICE SECTION */}
      {/* <section id="service-section">
           <div className="container-fluid">
               <div className="row">
                 <div className="col-lg-10 mx-auto">
                 <div class="section-title">
                <h2 data-aos="fade-in">Services</h2>
                <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                 </div>
               </div>
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                     <div className="row">
                        {SERVICE_LIST.map((data,index)=>{
                           return (
                                <HomeServiceCard key={index} name={data.name}  serviceImage={data.serviceImage} description={data.description} /> )})}
                     </div>
                  </div>
              </div>
           </div>
       </section> */}
      <section id="HeSeSn1">
        <div id="HProd1">
          <div className="container-fluid">
            <ProductCardHeading name={'Number Plate Recognition'} description={'Provide Awsome Images like Studios'} color={'#111f27'} />
            <div className="row">
              <div className="col-md-6 Hcard-img">
                <div className="HImg">
                  <img src={ServiceImage1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 Hcard-img">
                <div className="HImg">
                  <img src={ServiceImage1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="btn-cntainer">
              <Link className="Know-more-btn" to="/contact-us" style={{ color: '#111f27' }}>Know More</Link>
            </div>
          </div>
        </div>
        <div id="HProd2">
          <div className="container-fluid">
            <ProductCardHeading name={'Studio Photo'} description={'Provide Awsome Images like Studios'} />
            <div className="row">
              <div className="col-md-6 Hcard-img">
                <div className="HImg">
                  <img src={ServiceImage1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 Hcard-img">
                <div className="HImg">
                  <img src={ServiceImage1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="btn-cntainer">
              <Link className="Know-more-btn" to="/contact-us">Know More</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Hm-testimonials">
        <div className="container">
          <ProductCardHeading name={'Testimonials'} description={'Provide Awsome Images like Studios'} color={'#111f27'} />
          {/* <div className="row"> */}
          <SlickSliderWrapper>
            {
              TestimonialContents.map((data, index) => {
                return (
                  <TestimonialsCard key={index} />
                )
              })
            }
          </SlickSliderWrapper>
          {/* </div> */}
        </div>
      </section>

      <ClientSection />

      <section id="home-cont">
        <div className="container-fluid">
          <h2>Find out how conversational AI can make a difference in your business</h2>
          <Link className="btn-contact" to="/contact-us">Contact</Link>
        </div>
      </section>
      <section id="HSubSec">
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
