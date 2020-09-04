import React from 'react';
import './NotFound.scss'


export default function DisplayMessage(props) {

    if (!props.hasOwnProperty('message')) {
        return (
            <div className="container my-5 emp-profile profile">
                <form className="form-profile">
                    <div className="row">
                        <div className="col-md-5 py-3 profile-left">
                            <div className="profile_img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="Card image cap"/>
                            <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file"/>
                                    </div>
                            </div> 
                            <div className="profile-head">
                                <h3 className="text-white">
                                    Kshiti Ghelani
                                </h3>
                                <p className="text-white profile-detail">Course : <span className="text-white">Web Developer and Designer</span></p>
                                <p className="text-white profile-detail">Joining Date : <span className="text-white">12/08/2020</span></p>
                            </div>                  
                        </div>
                        <div className="col-md-7 profile-right">                    
                            <h3 className="text-uppercase text-center font-weight-bold mt-5 mb-4">profile</h3>
                            <div className="col-md-12">
                                <input type="submit" className="float-right profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
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
                                                        <label>User Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>Kshiti123</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>Kshiti Ghelani</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>kshitighelani@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>123 456 7890</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div class="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>Web Developer and Designer</p>
                                                    </div>
                                                </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="d-flex">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
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

                
                    {/* <div class="error-box my-5" >
                        <div class="error-body text-center">
                            <h1 class="error-title text-danger" style={{"text-shadow":" 4px 4px 0 #fff, 6px 6px 0 #263238",
                            "font-size": "150px","line-height": "150px","font-weight": "900"}}>404</h1>
                            <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                            <p class="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                            <a href="index.html" class="btn btn-danger btn-rounded waves-effect waves-light mb-5" style={{"border-radius": "60px","padding": "7px 18px"}}>Back to home</a>
                        </div>
                    </div> */}                    
            </div>
        );
    } else {
        return (
            <div>
                {props.message}
            </div>
        );
    }
}