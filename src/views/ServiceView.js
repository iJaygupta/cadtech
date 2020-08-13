import React from "react";
import PageJumbotron from "../utils/PageJumbotron";
import { Link } from 'react-router-dom';
import ServiceImage from '../assets/img/service-section.jpeg'
import HeadingTitle from "../utils/HeadingTitle";

const SERVICEVIEW_LIST = [
    { id: 1, name: 'Artificial Intelligence', image: ServiceImage },
    { id: 2, name: 'Deep Learning', image: ServiceImage },
    { id: 3, name: 'Web Application', image: ServiceImage },
    { id: 4, name: 'Mobile Application', image: ServiceImage }
]

const ServiceView = () => {
    return (
        <div className="service-view">
            <PageJumbotron headerTitle={"Courses"} />
            <section id="service-list">
                <div className="container">
                    <HeadingTitle
                        title={"Courses"}
                        description={
                            "Magnam dolores commodi suscipit. Necessitatibus eius consequatur"
                        }
                        titleColor={"#213b52"}
                    />
                    <div className="row items-services">
                        {
                            SERVICEVIEW_LIST.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-6">
                                        <Link to="/home" className="item-service">
                                            <div className="service-image">
                                                <img width="744" height="420" src={item.image} alt="" className="img-fluid" />
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
};

export default ServiceView;
