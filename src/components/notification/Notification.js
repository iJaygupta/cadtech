import React, { Component } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Notification extends Component {
    constructor(props) {
        super(props);
    }

    showNotification = (success, message) => {
        if (success) {
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });

        } else {
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    render() {
        return (
            <>
                <ToastContainer autoClose={3000} hideProgressBar pauseOnHover={false} />
            </>
        )
    }
}
