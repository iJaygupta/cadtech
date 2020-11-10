
import React, { Component } from 'react';
import $ from "jquery";
import './order.css';
import { getAllOrders } from '../../../actions/orderAction';
import { toast } from 'react-toastify';
import moment from 'moment';



export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            skip: "",
            limit: "",
            searchKeyword: "",
            orderBy: "",
            sortBy: "",
            pagination: "",
            page: "",
        }
    }

    sortList = (field) => {
        let order = (field == this.state.sortBy && this.state.orderBy && this.state.orderBy == 'asc') ? 'desc' : 'asc';
        this.setState({
            sortBy: field,
            orderBy: order,
            skip: "",
            limit: "",
            pagination: "",
            page: "",
            searchKeyword: this.state.searchKeyword.trim()
        }, () => {
            this.applyFilter();
        });
    }

    getOrdersList = (filters) => {
        getAllOrders(filters, (response) => {
            if (response && response.status == "OK") {
                this.setState({ orders: response.data.items })
                if (!filters) {
                    toast.success(response.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            } else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    componentDidMount() {
        this.getOrdersList();
    }

    applyFilter = () => {
        let filters = {
            skip: this.state.skip,
            limit: this.state.limit,
            orderBy: this.state.orderBy,
            sortBy: this.state.sortBy,
            pagination: this.state.pagination,
            page: this.state.page,
            searchKeyword: this.state.searchKeyword.trim()
        }
        this.getOrdersList(filters);
    }

    searchProviders = (e) => {
        let value = e.target.value;
        this.setState({
            searchKeyword: value,
            skip: "",
            limit: "",
            orderBy: "",
            sortBy: "",
            pagination: "",
            page: "",
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
            searchKeyword: this.state.searchKeyword.trim()
        }, () => {
            this.applyFilter();
        });
    }

    render() {

        console.log(this.state)

        let totalRecords = this.props.provider ? this.props.provider.totalRecords : ""
        let totalResult = this.props.provider ? this.props.provider.totalResult : "";
        let previousPage = this.props.provider && this.props.provider.pagination ? this.props.provider.pagination.previousPage : "";
        let nextPage = this.props.provider && this.props.provider.pagination && this.props.provider.pagination ? this.props.provider.pagination.nextPage : 2;

        if (this.state.orders && this.state.orders.length) {
            var orders = this.state.orders.map(data => {
                return (<tr className="table-success">
                    <td>{data.productId}</td>
                    <td>{data.customer_id}</td>
                    <td>{data.coupon}</td>
                    <td>{data.discount_total}</td>
                    <td>{data.subtotal}</td>
                    <td>{data.paid  ? "True" : "False" }</td>
                    <td>{data.createdAt ? moment(data.createdAt).format('MM/DD/YYYY') : ''}</td>
                    <td>{!data.status ? "Active" : "Blocked"}</td>
                    <td>
                        <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                    </td>
                </tr>)
            })
        }


        return (
            <div className="container-fluid">
                <div className="table-wrapper">
                    <div className="table-title">
                        <nav className="navbar navbar-light bg-light justify-content-between">
                            <a className="navbar-brand">Brand_Logo</a>
                            <form className="search-box form-inline">
                                {/* <i class="material-icons">&#xE8B6;</i> */}
                                <input id="table-serach" className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.searchProviders} aria-label="Search" />
                            </form>
                        </nav>
                        <table id="table-data" className="table-bordered table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th onClick={() => this.sortList('name')} scope="col">Product Id <i className="fa fa-sort"></i></th>
                                    <th onClick={() => this.sortList('lowest_price')} scope="col">Customer id <i className="fa fa-sort"></i></th>
                                    <th scope="col">Coupon <i className=""></i></th>
                                    <th scope="col">Discount total <i className=""></i></th>
                                    <th scope="col">Subtotal <i className=""></i></th>
                                    <th scope="col">Paid <i className=""></i></th>
                                    <th onClick={() => this.sortList('max_speed')} scope="col">Joined At <i className="fa fa-sort"></i></th>
                                    <th onClick={() => this.sortList('max_speed')} scope="col"> Status <i className="fa fa-sort"></i></th>
                                    <th scope="col">Actions <i className=""></i></th>
                                </tr>
                            </thead>
                            <tbody className="" id="myTable">
                                {orders}
                            </tbody>
                        </table>

                        <div className="clearfix">
                            <div className="hint-text">Showing <b>{totalResult}</b> out of <b>{totalRecords}</b> entries</div><br />
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
                                <div className="col-sm-6 justify-content-start">
                                    <div className="dropdown">
                                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter
                                    <span className="caret"></span></button>
                                        <ul className="dropdown-menu border-0" id="table-menu">
                                            <li className="pl-2"><a href="#">Price</a></li>
                                            <li className="pl-2"><a href="#">Rating</a></li>
                                            <li className="pl-2"><a href="#">Range</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div></div>
                </div>
            </div>

        );
    }
};