import React from "react";
import PageJumbotron from "../../utils/PageJumbotron";
import { Link } from 'react-router-dom';
import HeadingTitle from "../../utils/HeadingTitle";
import courses from "../../config/course.json";



const Services = () => {
    return (
        <div className="service-view">
            <PageJumbotron headerTitle={"Services"} />
            <section id="service-list">
                <div className="container">
                    <HeadingTitle
                        title={"Services"}
                        description={
                            "Detail significant learning experiences and benefits students can expect"
                        }
                        titleColor={"#213b52"}
                    />
                    <div className="row items-services">
                        {
                            courses.map((item, index) => {
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

export default Services
