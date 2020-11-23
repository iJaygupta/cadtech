import React, { Component } from "react";
import PageJumbotron from "../../utils/PageJumbotron";
import { Link } from 'react-router-dom';
import HeadingTitle from "../../utils/HeadingTitle";
import guide from "../../config/guide.json";
import { toast } from 'react-toastify';
import { getAllGuide } from "../../actions/lookUpAction";



export default class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guide: guide,
        }
    }

    getGuideDetails = () => {
        getAllGuide((response) => {
            if (response && response.status == "OK") {
                this.setState({ guide: response.data });
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        });
    }

    componentDidMount() {
        this.getGuideDetails();
    }

    render() {
        return (
            <div className="service-view">
                {/* <PageJumbotron headerTitle={"Services"} /> */}
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
                            {this.state.guide.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-6">
                                        <Link to="#" className="item-service">
                                            <div className="service-image">
                                                <img width="300" height="200" src={item.filename} alt="" className="img-fluid" />
                                            </div>
                                            <div className="service-text">
                                                <h3>{item.name}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </section>
            </div>
        );

    }

}