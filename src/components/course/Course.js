import React, { Component, useState } from "react";
import PageJumbotron from "../../utils/PageJumbotron";
import { Link } from 'react-router-dom';
import ServiceImage from '../../assets/img/service-section.jpeg'
import HeadingTitle from "../../utils/HeadingTitle";
import './Course.scss'
import { getCourses } from '../../actions/courseAction';


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

                        <div class="dropdown row col-sm-10 col-lg-12">
                            <select class="form-control col-sm mx-2">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                            <select class="form-control col-sm mx-2">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                            <select class="form-control col-sm mx-2">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                            <select class="form-control col-sm mx-2">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>

                        <div class="row">
                            {this.state.courses.map((item, index) => {
                                return (
                                    <div class="col-sm-4">
                                        <div class="infocardContainer">
                                            <div id="main">
                                                <img src={item.filename}></img>
                                            </div>
                                            <div id="textbois">
                                                <h2>{item.name}</h2>
                                                <h4>{item.meta_description}</h4>
                                                <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                                                <div id="hotlinks">
                                                    <a href="https://codepen.io/LIMESTA"><img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                                                    </a>
                                                    <a href="https://codepen.io/LIMESTA">
                                                        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                                                    </a>
                                                    <a href="https://codepen.io/LIMESTA">
                                                        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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