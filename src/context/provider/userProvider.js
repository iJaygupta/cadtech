import React, { Component } from 'react'
import UserContext from '../userContext'

export default class UserProvider extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        const roles = localStorage.getItem('roles');
        this.state = {
            isAuth: Boolean(token),
            token: token,
            roles: roles
        }
    }

    setValue = (value) => {
        this.setState(value)
    }

    render() {
        return <UserContext.Provider value={{ ...this.state, setValue: this.setValue }}>{this.props.children}</UserContext.Provider>;
    }
}