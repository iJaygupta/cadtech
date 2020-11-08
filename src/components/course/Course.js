import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import HeadingTitle from "../../utils/HeadingTitle";
import './Course.scss'
import { getCourses, getCourseCategories } from '../../actions/courseAction';
import { toast } from 'react-toastify';
import courses from "../../config/course.json";


export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: {
                items: courses
            },
            courseCategories: [],
            searchKeyword: "",
            skip: "",
            limit: "",
            orderBy: "",
            sortBy: "",
            pagination: "",
            page: "",
            course_category_id: ""
        }
    }

    applyFilter = () => {
        let filters = {
            skip: this.state.skip,
            limit: this.state.limit,
            orderBy: this.state.orderBy,
            sortBy: this.state.sortBy,
            pagination: this.state.pagination,
            page: this.state.page,
            searchKeyword: this.state.searchKeyword ? this.state.searchKeyword.trim() : '',
            course_category_id: this.state.course_category_id
        }
        this.getCourseList(filters);
    }

    searchCourses = (e) => {
        let value = e.target.value;
        this.setState({
            searchKeyword: value,
            skip: "",
            limit: "",
            orderBy: "",
            sortBy: "",
            pagination: "",
            page: "",
            course_category_id: ""
        }, () => {
            this.applyFilter();
        })
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            page: pageNumber,
            pagination: true,
            skip: this.state.skip,
            limit: this.state.limit,
            orderBy: this.state.orderBy,
            sortBy: this.state.sortBy,
            searchKeyword: this.state.searchKeyword.trim(),
            course_category_id: this.state.course_category_id
        }, () => {
            this.applyFilter();
        });
    }

    filterCourse = (value) => {
        this.setState({ course_category_id: value }, () => { this.applyFilter(); })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if (value == '') {
            this.setState({ [name]: value })
        } else {
            this.setState({ [name]: value })
        }
    }

    getCourseList = (filters) => {
        getCourses(filters, (response) => {
            if (response && response.status == "OK") {
                this.setState({ courses: response.data })
                if (!filters) {
                    toast.success(response.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            } else {
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    getCourseCategories = () => {
        getCourseCategories((response) => {
            if (response && response.status == "OK") {
                this.setState({ courseCategories: response.data })
            } else {
                toast.error("Something Went Wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    componentDidMount() {
        this.getCourseList();
        this.getCourseCategories();
    }

    render() {
        let previousPage = this.state.courses && this.state.courses.pagination ? this.state.courses.pagination.previousPage : "";
        let nextPage = this.state.courses && this.state.courses.pagination && this.state.courses.pagination ? this.state.courses.pagination.nextPage : 2;
        return (
            <div className="service-view">
                <section id="service-list">
                    <div className="container-fluid">
                        <nav class="navbar navbar-light">
                            <form class="form-inline m-auto">
                                <input class="form-control mr-sm-2" name="searchKeyword" type="search" style={{ "width": "300px" }} placeholder="What do you want to learn?" aria-label="Search" onChange={this.searchCourses} />
                                <a class="btn btn-outline-success my-2 my-sm-0" onClick={this.searchCourses}>Search</a>
                            </form>
                        </nav>
                        < div className="container-fluid px-4">
                            <div className="btn-group">
                                <button type="button" className="form-control btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </button>
                                <div className="dropdown-menu">
                                    {this.state.courseCategories.map(el => {
                                        return <a className="dropdown-item" href="javascript:void(0);" onClick={() => { this.filterCourse(el._id) }}>{el.name}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                        <HeadingTitle
                            title={"Courses"}
                            description={
                                "Education is not preparation for life, education is life itself"
                            }
                            titleColor={"#213b52"} />
                        <div className="container-fluid row p-3 m-auto">
                            {this.state.courses.items && this.state.courses.items.map((item, index) => {
                                let courseLink = `/course/detail/${item._id}`
                                return (
                                    < Link to={courseLink} >
                                        <div className="px-2 py-4 m-auto" >
                                            <div className="col-lg-12 p-0 col-md-12 col-sm-12 mb-4 mb-lg-0" >
                                                <div className="b-shadow bg-white b-rounded">

                                                    <div id="main">
                                                        <img style={{ "width": "300px", "height": "200px" }} className="card-img-top" src={item.filename}></img>
                                                    </div>
                                                    <div id="textbois" className="p-3">
                                                        <h6 className="">{item.name}</h6>
                                                        <h6 className="text-info font-weight-normal">{item.duration}</h6>
                                                        <a class="text-warning"> <del>&#2352;</del>{item.price} </a>
                                                        {/* <a href="mailto:limecicila@gmail.com">1200$</a> */}
                                                        <ul className="social mb-0 list-inline mt-3">
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                                            <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            }
                        </div>
                        <div className="clearfix">
                            {/* <div className="hint-text">Showing <b>{totalResult}</b> out of <b>{totalRecords}</b> entries</div><br /> */}
                            <div className="row container-fluid">
                                <div className="col-sm-6">
                                    <ul className="pagination">  {/*justify-content-end */}
                                        {previousPage && <li onClick={() => { this.handlePageChange(previousPage) }} className="page-item">
                                            <a onClick={() => { this.handlePageChange(2) }} className="page-link" href="javascript:void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>}
                                        <li onClick={() => { this.handlePageChange(1) }} className="page-item"><a className="page-link" href="javascript:void(0);">1</a></li>
                                        <li onClick={() => { this.handlePageChange(2) }} className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                        <li onClick={() => { this.handlePageChange(3) }} className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                        <li onClick={() => { this.handlePageChange(4) }} className="page-item"><a className="page-link" href="javascript:void(0);">4</a></li>
                                        {nextPage && <li onClick={() => { this.handlePageChange(nextPage) }} className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div >
                </section >
            </div >
        );
    }

}