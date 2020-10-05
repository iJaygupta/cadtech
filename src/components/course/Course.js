import React, { Component, useState } from "react";
import PageJumbotron from "../../utils/PageJumbotron";
import HeadingTitle from "../../utils/HeadingTitle";
import './Course.scss'
import { getCourses } from '../../actions/courseAction';
import { toast } from 'react-toastify';
import courses from "../../config/course.json";


export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        getCourses((response) => {
            if (response && response.status == "OK") {
                this.setState({ courses: response.data })
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
        this.setState({ courses: courses })

    }

    render() {
        return (
            <div className="service-view">
                <PageJumbotron headerTitle={"Courses"} />
                <section id="service-list">
                    <div className="container-fluid">
                    <nav class="navbar navbar-light bg-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                        <HeadingTitle
                            title={"Courses"}
                            description={
                                "Detail significant learning experiences and benefits students can expect"
                            }
                            titleColor={"#213b52"}/>
                            
                    {/* filter */}
                        <div className="container-fluid px-4">
                            <div className="btn-group">
                                <button type="button" className="form-control btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">select1</a>
                                    <a className="dropdown-item" href="#">select2</a>
                                    <a className="dropdown-item" href="#">select3</a>
                                    <a className="dropdown-item" href="#">select4</a>
                                </div>
                            </div>
                        </div>
                    {/* filter */} 

                    {/* card */}
                        <div className="container-fluid row p-3 m-auto">
                                {this.state.courses.map((item, index) => {
                                    return (
                                        <div className="px-2 py-4 m-auto" >
                                            <div className="col-lg-12 p-0 col-md-12 col-sm-12 mb-4 mb-lg-0" >            
                                                <div className="b-shadow  bg-white b-rounded">
                                                    
                                                        <div id="main">
                                                            <img style={{"width":"300px","height":"200px"}} className="card-img-top" src={item.filename}></img>
                                                        </div>
                                                        <div id="textbois" className="p-3">
                                                            <h6 className="">{item.name}</h6>                                                            
                                                            <h6 className="text-info font-weight-normal">{item.meta_description}</h6>
                                                            <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                                                            <ul className="social mb-0 list-inline mt-3">
                                                                <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                                                                <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                                                                <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                                                <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>               
                                        )
                                    })
                                }
                        </div>
                    {/* card  */}
                 </div>
                </section>
            </div>
        );
    }

}