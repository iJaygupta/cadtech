
import React, { Component } from 'react';
import { getCourseCategories } from '../../../actions/courseAction';
import { toast } from 'react-toastify';
import AddCourse from '../course/AddCourse';




export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseView: false,
            courseCategories: []
        }
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


    changeScreen = (view) => {
        let state = { ...this.state };
        state[view] = true;
        this.setState(state)
    }

    componentDidMount() {
        this.getCourseCategories();
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>DashBoard</h1>
                <button onClick={() => { this.changeScreen('courseView') }}>Add New Course</button>
                {this.state.courseView &&
                    <AddCourse courseCategories={this.state.courseCategories} />}
            </div>

        );
    }
};