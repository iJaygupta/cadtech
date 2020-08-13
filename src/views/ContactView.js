import React from 'react'
import PageJumbotron  from '../utils/PageJumbotron'
import { Link } from 'react-router-dom'
import HeadingTitle from '../utils/HeadingTitle'

const SOCIAL_LINK_LIST = [
  {id: 1 , name: 'twitter' , classname: 'fab fa-twitter' , link : ''},
  {id: 2 , name: 'linkedin' , classname: 'fab fa-linkedin-in' , link : ''},
  {id: 3 , name: 'instagram' , classname: 'fab fa-instagram' , link : ''},
  {id: 4 , name: 'facebook' , classname: 'fab fa-facebook-f' , link : ''},
]

const ContactView = () => {
    return (
    <div class="contact-page-view">
     <PageJumbotron headerTitle = {'Contact Us'} />
     <section id="contact" className="contact section-bg">
      <div className="contact-info">
      <div className="container">
        {/* <div className="page-view-title">
          <h2 >Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div> */}
        <HeadingTitle  
            title={'Contact Us'}
            description ={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
            titleColor ={'#213b52'}
            />
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i class="fas fa-envelope-square"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                <i class="fas fa-phone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form  className="contact-view-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="btn-cntainer">
              <button type="submit" className="send-message" >Send Message</button>
           </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="contactus-socials">
        <div className="container">
          <HeadingTitle  
            title={'Other Way To Connect'}
            description ={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
            titleColor ={'#213b52'}
            />

               <div className="row">
                 <div className="col-8 mx-auto d-flex justify-content-center align-content-center">
                 {SOCIAL_LINK_LIST.map((socialData , index)=>(
                     <div key={socialData.index} className="icon-box">
                       <Link to="/">
                       <i className={socialData.name + " " + socialData.classname}></i>
                       </Link>
                     </div>
                 ))}
                 </div>
               </div>
      </div>
      </div>
    </section>
        </div>
    )
}

export default ContactView
