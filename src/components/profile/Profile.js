import React, { Component } from 'react';
import { getUserAccountDetails, updateUserAccountDetails } from "../../actions/profileAction";
import { Input, Button } from 'reactstrap';

import moment from 'moment';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            editMode: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let userInfo = this.state.userInfo;
        if (value == '') {
            userInfo[name] = value;
            this.setState({ userInfo: userInfo })
        } else {
            userInfo[name] = value;
            this.setState({ userInfo: userInfo })
        }
    }

    changeMode = () => {
        if (this.state.editMode) {
            this.saveProfile();
        }
        this.setState({ editMode: !this.state.editMode });
    }

    saveProfile() {
        let { firstName, lastName, email, mobile } = this.state.userInfo
        updateUserAccountDetails({ firstName, lastName, email, mobile }, (response) => {
            console.log(response);
            if (response && response.status == "OK") {
            } else {
            }
        })
    }

    componentDidMount() {
        getUserAccountDetails((response) => {
            console.log(response);
            if (response && response.status == "OK") {
                this.setState({ userInfo: response.data })
            } else {
            }
        })
    }

    render() {
        console.log("this.state.userInfo.firstName", this.state.userInfo.firstName);
        return (
            <div className="container my-5 emp-profile profile">
                <form className="form-profile">
                    <div className="row">
                        <div className="col-md-5 py-3 profile-left">
                            <div className="profile_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="Card image cap" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                        <input type="file" name="file" />
                                </div>
                            </div>
                            <div className="profile-head">
                                <h3 className="text-white">
                                    {`${this.state.userInfo.firstName ? this.state.userInfo.firstName : ''}  ${this.state.userInfo.lastName ? this.state.userInfo.lastName : ''}`}
                                </h3>
                                <p className="text-white profile-detail">Course : <span className="text-white">Web Developer and Designer</span></p>
                                <p className="text-white profile-detail">Joining Date : <span className="text-white">{this.state.userInfo.createdAt ? moment(this.state.userInfo.createdAt).format('MM/DD/YYYY') : ''}</span></p>
                            </div>
                        </div>
                        <div className="col-md-7 profile-right">
                            <h3 className="text-uppercase text-center font-weight-bold mt-5 mb-4">profile</h3>
                            <div className="col-md-12">
                                <input className="float-right profile-edit-btn" name="btnAddMore" value={!this.state.editMode ? 'Edit Profile' : 'Save Profile'} onClick={this.changeMode} />
                            </div>
                            <div class="col-md-8 py-3">
                                <div class="profile-head">
                                    <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.firstName}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="firstName" placeholder="First Name" value={this.state.userInfo.firstName} onChange={this.handleChange} />
                                                }
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.lastName}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="lastName" placeholder="First Name" value={this.state.userInfo.lastName} onChange={this.handleChange} />
                                                }
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.email}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="email" placeholder="First Name" value={this.state.userInfo.email} onChange={this.handleChange} />
                                                }
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.mobile}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="mobile" placeholder="First Name" value={this.state.userInfo.mobile} onChange={this.handleChange} />
                                                }
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.gender}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="mobile" placeholder="First Name" value={this.state.userInfo.gender} onChange={this.handleChange} disabled />
                                                }
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Education</label>
                                            </div>
                                            <div class="col-md-6">
                                                {!this.state.editMode ?
                                                    <p>{this.state.userInfo.education}</p>
                                                    :
                                                    <Input className="form-control" type="text" name="mobile" placeholder="First Name" value={this.state.userInfo.education} onChange={this.handleChange} disabled />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userInfo.address}</p>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}