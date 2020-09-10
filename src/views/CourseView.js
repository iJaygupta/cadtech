import React, { Component, useState } from "react";
import PageJumbotron from "../utils/PageJumbotron";
import { Link } from 'react-router-dom';
import ServiceImage from '../assets/img/service-section.jpeg'
import HeadingTitle from "../utils/HeadingTitle";
import { getCourses } from '../actions/courseAction';

export default class CourseView extends Component {
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
            }
        })

    }
    render() {
        return (
            <div className="service-view">
                <PageJumbotron headerTitle={"Courses"} />
                <section id="service-list">
                    <div className="container">
                        <HeadingTitle
                            title={"Courses"}
                            description={
                                "Detail significant learning experiences and benefits students can expect"
                            }
                            titleColor={"#213b52"}
                        />
                        <div className="row items-services">
                            {
                                this.state.courses.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-6">
                                            <Link to="/home" className="item-service">
                                                <div className="service-image">
                                                    <img width="744" height="420" src={item.filename} alt="" className="img-fluid" />
                                                </div>
                                                <div className="service-text">
                                                    <h3>{item.name}</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </section>
            </div>
        );
    }

}