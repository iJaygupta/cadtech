import React, { Component } from 'react'
import PageJumbotron from '../utils/PageJumbotron'
import { Link } from 'react-router-dom'
import HeadingTitle from '../utils/HeadingTitle';
import { contactUs } from '../actions/enquiryAction';
import Feedback from 'react-bootstrap/esm/Feedback';

const SOCIAL_LINK_LIST = [
  { id: 1, name: 'twitter', classname: 'fab fa-twitter', link: '' },
  { id: 2, name: 'linkedin', classname: 'fab fa-linkedin-in', link: '' },
  { id: 3, name: 'instagram', classname: 'fab fa-instagram', link: '' },
  { id: 4, name: 'facebook', classname: 'fab fa-facebook-f', link: '' },
]
export default class ContactView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      isSent: "",
      authError: "",
      errorParam: {
        yourName: false,
        subject: false,
        email: false,
        message: false,
        isSent: false,
      }
    }
  }

  handleChange = (e) => {

    const { name, value } = e.target;
    if (value == '') {
      let errorParam = { ...this.state.errorParam };
      errorParam[name] = true;
      this.setState({ errorParam: errorParam })
    } else {
      this.setState({ [name]: value }, () => {
        let errorParam = { ...this.state.errorParam };
        errorParam[name] = false;
        this.setState({ errorParam: errorParam })
      })
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateData()) {
      console.log("Validation Success");
      this.submitData();
    } else {
      this.setAuthError("Validation Failed");
      console.log("Validation Failed")
    }
  };

  submitData = () => {
    let { name, email, subject, message } = this.state;
    contactUs({ name, email, subject, message }, (response) => {
      if (response && response.status == "OK") {
        this.props.history.push("/home");
      } else {
        this.setAuthError(response.message);
      }
    });
  }

  validateData = (event) => {
    let errorParam = { ...this.state.errorParam }
    let flag = false;
    let contactData = this.state;
    for (const key in contactData) {
      if (contactData[key] == '' && key != "authError" && key != "isSent") {
        errorParam[key] = true;
        flag = true;
      }
    }
    this.setState({ errorParam: errorParam })
    return flag;
  }

  setAuthError(message) {
    this.setState({ authError: message })
  }

  render() {
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
                  <form className="contact-view-form">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={this.handleChange} required />
                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['name'] ? "Name is required" : ""}</span>

                      </div>
                      <div className="col-md-6 form-group">
                        <label for="email">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={this.handleChange} />
                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['email'] ? "Email is required" : ""}</span>

                      </div>
                    </div>
                    <div className="form-group">
                      <label for="subject">Your Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={this.handleChange} />
                      <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['subject'] ? "Subject is required" : ""}</span>

                    </div>
                    <div className="form-group">
                      <label for="message">Your Message</label>
                      <textarea className="form-control" name="message" rows="5" onChange={this.handleChange}></textarea>
                      <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['message'] ? "Message is required" : ""}</span>

                    </div>
                    <div className="mb-3">
                      {this.state.isSent ?
                        <div className="sent-message">Your message has been sent. Thank you!</div> : ""
                      }
                    </div>
                    <div className="btn-cntainer">
                      <button type="submit" className="send-message" onClick={this.handleSubmit} >Send Message</button>
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
}


// const ContactView = () => {

//   const [name, setName] = useState('');
//   const [values, setValues] = useState('');
//   const [errors, setErrors] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSent, setIsSent] = useState(false);


//   const validate = (values) => {
//     let errors = {};
//     if (values.name.trim() === '') {
//       errors.name = "Name is Required";
//     }
//     if (values.email.trim() === '') {
//       errors.email = "Email is Required";
//     }
//     if (values.subject.trim() === '') {
//       errors.subject = "Subject is Required";
//     }
//     if (values.message.trim() === '') {
//       errors.message = "Subject is Required";
//     }
//     // if (object.keys(validate(values)).length === 0) {
//     //   setValues('');
//     // } else {
//     //   setErrors(validate(values))
//     // }
//     return errors;
//   }

//   const handleChange = (e) => {
//     if (e.target.id === 'name') {
//       setName(e.target.value)
//     } else if (e.target.id === 'email') {
//       setEmail(e.target.value.trim())
//     } else if (e.target.id === 'subject') {
//       setSubject(e.target.value.trim())
//     } else {
//       setMessage(e.target.value.trim())
//     }

//   };

//   const handleSent = (isSent) => {
//     setIsSent(isSent);
//     setName('')
//     setEmail('')
//     setSubject('')
//     setMessage('')
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     contactUs({ name, email, subject, message }, (response) => {
//       if (response.status == "OK") {
//         handleSent(true);
//       } else {
//         handleSent(false)
//       }
//     });
//   };
//   return (
//     <div class="contact-page-view">
//       <PageJumbotron headerTitle={'Contact Us'} />
//       <section id="contact" className="contact section-bg">
//         <div className="contact-info">
//           <div className="container">
//             {/* <div className="page-view-title">
//           <h2 >Contact</h2>
//           <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//         </div> */}
//             <HeadingTitle
//               title={'Contact Us'}
//               description={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
//               titleColor={'#213b52'}
//             />
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="info-box">
//                       <i className="fas fa-map-marker-alt"></i>
//                       <h3>Our Address</h3>
//                       <p>T-4, 1st floor,Shivalik Nagar, Near ATM Chowk, BHEL, Ranipur, Haridwar (Uttrakhand)</p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="info-box mt-4">
//                       <i class="fas fa-envelope-square"></i>
//                       <h3>Email Us</h3>
//                       <p>info@cadtech.in<br />cadtechprofessionals@gmail.com</p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
//                       <i class="fas fa-phone"></i>
//                       <h3>Call Us</h3>
//                       <p>+91 9084868584<br />+1 6678 254445 41</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <form className="contact-view-form">
//                 <div className="form-row">
//                   <div className="col-md-6 form-group">
//                     <input type="text" name="name" className={`form-control ${errors.name}` && is-invalid} 
//                     id="name" placeholder="Your Name" value={name} onChange={handleChange} required />
//                    {errors.name &&(
//                      <div className="invalid-feedback">
//                        {errors.name}
//                      </div>
//                    )}
//                     <div className="validate"></div>
//                   </div>
//                   <div className="col-md-6 form-group">
//                     <input type="email" className={`form-control ${errors.email}` && is-invalid} name="email" id="email" placeholder="Your Email" value={email} onChange={handleChange} />
//                    {errors.email &&(
//                      <div className="invalid-feedback">
//                        {errors.email}
//                      </div>
//                    )}

//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <input type="text" className={`form-control ${errors.subject}` && is-invalid} name="subject" id="subject" placeholder="Subject" value={subject} onChange={handleChange} />
//                   {errors.subject &&(
//                      <div className="invalid-feedback">
//                        {errors.subject}
//                      </div>
//                    )}
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <textarea className={`form-control ${errors.message}` && is-invalid} name="message" rows="5" value={message} onChange={handleChange}></textarea>
//                   {errors.message &&(
//                      <div className="invalid-feedback">
//                        {errors.message}
//                      </div>
//                    )}
//                   <div className="validate"></div>
//                 </div>
//                 <div className="mb-3">
//                   {isSent ?
//                     <div className="sent-message">Your message has been sent. Thank you!</div> : ""
//                   }
//                 </div>
//                 <div className="btn-cntainer">
//                   <button type="submit" className="send-message" onClick={handleSubmit} >Send Message</button>
//                 </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="contactus-socials">
//           <div className="container">
//             <HeadingTitle
//               title={'Other Way To Connect'}
//               description={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur'}
//               titleColor={'#213b52'}
//             />

//             <div className="row">
//               <div className="col-8 mx-auto d-flex justify-content-center align-content-center">
//                 {SOCIAL_LINK_LIST.map((socialData, index) => (
//                   <div key={socialData.index} className="icon-box">
//                     <Link to="/">
//                       <i className={socialData.name + " " + socialData.classname}></i>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ContactView
