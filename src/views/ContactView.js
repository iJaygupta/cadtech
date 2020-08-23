import React, { useState } from 'react'
import PageJumbotron from '../utils/PageJumbotron'
import { Link } from 'react-router-dom'
import HeadingTitle from '../utils/HeadingTitle';
import { contactUs } from '../actions/contactUsAction';

const SOCIAL_LINK_LIST = [
  { id: 1, name: 'twitter', classname: 'fab fa-twitter', link: '' },
  { id: 2, name: 'linkedin', classname: 'fab fa-linkedin-in', link: '' },
  { id: 3, name: 'instagram', classname: 'fab fa-instagram', link: '' },
  { id: 4, name: 'facebook', classname: 'fab fa-facebook-f', link: '' },
]

const ContactView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);


  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value)
    } else if (e.target.id === 'email') {
      setEmail(e.target.value.trim())
    } else if (e.target.id === 'subject') {
      setSubject(e.target.value.trim())
    } else {
      setMessage(e.target.value.trim())
    }
  };

  const handleSent = (isSent) => {
    setIsSent(isSent);
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    contactUs({ name, email, subject, message }, (response) => {
      if (response.status == "OK") {
        handleSent(true);
      } else {
        handleSent(false)
      }
    });
  };
  return (
    <div class="contact-page-view">
      <PageJumbotron headerTitle={'Contact Us'} />
      <section id="contact" className="contact section-bg">
        <div className="contact-info">
          <div className="container">
            {/* <div className="page-view-title">
          <h2 >Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div> */}
            <HeadingTitle
              title={'Contact Us'}
              description={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
              titleColor={'#213b52'}
            />
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="fas fa-map-marker-alt"></i>
                      <h3>Our Address</h3>
                      <p>T-4, 1st floor,Shivalik Nagar, Near ATM Chowk, BHEL, Ranipur, Haridwar (Uttrakhand)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i class="fas fa-envelope-square"></i>
                      <h3>Email Us</h3>
                      <p>info@cadtech.in<br />cadtechprofessionals@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                      <i class="fas fa-phone"></i>
                      <h3>Call Us</h3>
                      <p>+91 9084868584<br />+1 6678 254445 41</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <form className="contact-view-form"> */}
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={name} onChange={handleChange} required />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={handleChange} />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={handleChange} />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" value={message} onChange={handleChange}></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  {isSent ?
                    <div className="sent-message">Your message has been sent. Thank you!</div> : ""
                  }
                </div>
                <div className="btn-cntainer">
                  <button type="submit" className="send-message" onClick={handleSubmit} >Send Message</button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-socials">
          <div className="container">
            <HeadingTitle
              title={'Other Way To Connect'}
              description={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
              titleColor={'#213b52'}
            />

            <div className="row">
              <div className="col-8 mx-auto d-flex justify-content-center align-content-center">
                {SOCIAL_LINK_LIST.map((socialData, index) => (
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
