import React, { Component } from 'react'
import UserContext from "../../context/userContext";
import { toast } from 'react-toastify';

export default class UserProvider extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = UserContext;

    logout = () => {
        localStorage.setItem('token', '');
        this.context.setValue({ isAuth: false, token: '' });
        toast.success('Succesfully Logged Out', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    componentWillMount() {
        this.logout();
        this.props.history.push("/");
    }

    render() {
        return (
            <>
            </>
        )
    }
}
