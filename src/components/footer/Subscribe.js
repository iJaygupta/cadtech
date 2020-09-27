import React, { Component } from 'react'
import HeadingTitle from '../../utils/HeadingTitle'
import { addSubscribe } from "../../actions/enquiryAction";
import { toast } from 'react-toastify';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      authError: "",
      errorParam: {
        email: false,
      }
    }
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    let errorParam = { ...this.state.errorParam };
    if (value == '') {
      errorParam[name] = true;
    } else {
      errorParam[name] = false;
    }
    this.setState({ [name]: value }, () => {
      this.setState({ errorParam: errorParam })
    })
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateData()) {
      this.submitData();
    } else {
      this.setAuthError("Please Provide Correct Info.");
    }
  }

  submitData = () => {
    let { email } = this.state;
    addSubscribe({ email }, (response) => {
      if (response && response.status == "OK") {
        this.setState({ email: '' })
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        this.setAuthError(response.message);
      }
    });
  }

  validateData = (event) => {
    let errorParam = { ...this.state.errorParam }
    let flag = false;
    let subscribeData = this.state;
    for (const key in subscribeData) {
      if (subscribeData[key] == '' && key != "authError") {
        errorParam[key] = true;
        flag = true;
      }
    }
    if (!this.validateEmail(subscribeData["email"])) {
      errorParam['email'] = 1;
      flag = true;
    }
    this.setState({ errorParam: errorParam })
    return flag;
  }

  setAuthError(message) {
    this.setState({ authError: message })
  }

  render() {
    return (
      <div className="newsletter-container">
        <div className="container subscribe-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* <h4>Join Our Newsletter</h4>
              <p>Stay up to date with the latest news from the NeuronLabsAi community</p> */}
              <HeadingTitle
                title={'Join Our Newsletter'}
                description={'Stay up to date with the latest news from the Cadtech community'}
                titleColor={'#213b52'}
              />
              <form className="news-letter-form">

                <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={this.handleChange} />
                <span style={{ "color": "red" }} className="errorMsg ml-3">{(this.state.errorParam['email'] === true) ? " email is Email is required" : (this.state.errorParam['email'] === 1) ? " email is please enter a valid email address" : ""}</span>
                <input type="submit" value="Subscribe" onClick={this.handleSubmit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
