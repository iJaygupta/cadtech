import React from 'react'
import './CourseDetail.scss'
import { getCourseById } from '../../actions/courseAction';
import { addToCart } from '../../actions/orderAction';
import { toast } from 'react-toastify';



export default class CourseDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseDetail: '',
            relatedCourses: []
        }
    }

    addToCart = (courseId) => {
        let data = {
            product_id: courseId
        }
        addToCart(data, (response) => {
            if (response && response.status == "OK") {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })

    }


    getCourseDetail = () => {
        let courseId = this.props.match.params.courseId;
        if (courseId) {
            getCourseById(courseId, (response) => {
                if (response && response.status == "OK") {
                    this.setState({ courseDetail: response.data.item, relatedCourses: response.data.related })
                } else {
                    toast.error("Something Went Wrong", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        }

    }

    componentDidMount() {
        this.getCourseDetail();
    }

    render() {
        return (
            <div className="column">
                <div className="main-container m-auto">
                    <div className=" row">
                        <div className="column col-sm-9 col-md-9 col-lg-9">
                            <section className="bg-position" >
                                <div className="">
                                    <nav className="d-flex" aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0 pl-0 pb-0 bg-none" style={{ background: 'none' }}>
                                            <li className="breadcrumb-item">Home</li>
                                            <li className="breadcrumb-item active" aria-current="page" style={{ color: 'inherit' }}>Course</li>
                                        </ol>
                                    </nav>
                                </div>
                            </section>
                            <hr />
                            {this.state.courseDetail &&
                                (
                                    <div className="row">
                                        <div className="column col-sm-5  position-relative" style={{ overflow: 'hidden' }}>
                                            <div id="main" className="">
                                                <img style={{ "width": "380px", "height": "220px" }} className="b-rounded b-shadow card-img-top" src={this.state.courseDetail.filename}></img>
                                            </div>
                                        </div>
                                        <div className="column col-sm-7 position-relative" style={{ overflow: 'hidden' }}>


                                            <div class="column relative courseMeta">
                                                <h2 class="title mt-0 mb-0">
                                                    <span itemprop="name">{this.state.courseDetail.name}</span></h2>
                                                <div>
                                                    <p><h6 className="bestseller">Bestseller</h6></p>
                                                    <p><h6>Beginner to Advance Level</h6></p>
                                                    <p><h6>For Queries :&nbsp;<a href="tel:+91 8130596876" >+91 8130596876 </a></h6></p>

                                                    <p><strong>LIFETIME ACCESS</strong></p>
                                                </div>
                                                <p class="ml-0 mb-0 text-primary"><i class="material-icons icon-text">layers</i> 4 Courses</p>
                                                <p class="ml-0 mb-0 language"><small>Language:  <span class="text-primary">Hindi</span></small></p>


                                                <div class="mt-2">
                                                    <div class="productPricing">
                                                        <div class="v1-20000-1450 p1 vvpricing">
                                                            <span style={{ 'text-decoration': 'line-through' }}> <i class="fab fa-inr" aria-hidden="true"></i> <del> 2000</del></span> &nbsp;
                                                                    92% OFF

                                                                        <br />
                                                            <h2 class="text-warning"> <del>&#2352;</del>{this.state.courseDetail.price} </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="columns cartBtns mt-2">
                                                    <div class="column col-5 col-md-6">
                                                        <button class="btn btn-lg btn-primary buyBtn btn-block" onClick={() => { this.addToCart(this.state.courseDetail._id) }}>Add to Cart</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className="column col-sm-3 col-md-3 col-lg-3" style={{ 'padding-top': '30px' }}>
                            {/*right card 1*/}
                            {
                                this.state.relatedCourses.length && this.state.relatedCourses.map(el => {
                                    return (
                                        <div className="py-4" >
                                            <div className="m-auto b-shadow bg-white b-rounded">
                                                <div id="main">
                                                    <img style={{ "width": "270px", "height": "170px" }} className="card-img-top" src={el.filename}></img>
                                                </div>
                                                <div id="textbois" className="p-3">
                                                    <h6 className="">{el.name}</h6>
                                                    <h6 className="text-info font-weight-normal">{el.duration}</h6>
                                                    <a href="mailto:limecicila@gmail.com">{el.price}</a>
                                                    <ul className="social mb-0 list-inline mt-3">
                                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                                        <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/*right card 2*/}
                            {/* <div className="py-4" >
                                <div className="m-auto b-shadow bg-white b-rounded">
                                    <div id="main">
                                        <img style={{ "width": "270px", "height": "170px" }} className="card-img-top" src="https://www.w3schools.com/w3css/img_nature.jpg"></img>
                                    </div>
                                    <div id="textbois" className="p-3">
                                        <h6 className="">test</h6>
                                        <h6 className="text-info font-weight-normal">AC</h6>
                                        <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                                        <ul className="social mb-0 list-inline mt-3">
                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
