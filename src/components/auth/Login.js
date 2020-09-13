import React, { Component, useState } from 'react';
import { login } from "../../actions/authAction";
import { Container, Row, CardImg, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './Login.scss'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            authError: "",
            errorParam: {
                userName: false,
                password: false,
            }
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        let errorParam = { ...this.state.errorParam };
        if (value == '') {
            errorParam[name] = true;
        } else {
            errorParam[name] = false;
        }
        this.setState({ [name]: value }, () => {
            this.setState({ errorParam: errorParam })
        })
    }

    setAuthError(message) {
        this.setState({ authError: message })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.validateData()) {
            this.submitData();
        } else {
            this.setAuthError("Please Provide Correct Info.");
        }
    }

    submitData = () => {
        let { userName, password } = this.state;
        login({ userName, password }, (response) => {
            if (response && response.status == "OK") {
                localStorage.setItem('token', response.data.token)
                this.props.history.push("/profile");
            } else {
                this.setAuthError(response.message);
            }
        });
    }

    validateData = (event) => {
        let errorParam = { ...this.state.errorParam }
        let flag = false;
        let loginData = this.state;
        for (const key in loginData) {
            if (loginData[key] == '' && key != "authError") {
                errorParam[key] = true;
                flag = true;
            }
        }
        this.setState({ errorParam: errorParam })
        return flag;
    }

    render() {
        return (
            <Container className="mt-5 login">
                <Row>
                    <Col md="6" className="login-left">
                        <CardImg width="100%" src="https://image.ibb.co/n7oTvU/logo_white.png" alt="Card image cap" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <a href="/register"><input type="submit" to="/login" name="" value="Register Now" /></a><br />
                    </Col>
                    <Col md="6" className="login-right">
                        <Form className="form-signin login-form" onSubmit={this.handleSubmit}>
                            <h3 className="text-uppercase text-center font-weight-bold mb-4">Login</h3>

                            <FormGroup className="form-label-group py-2">
                                <Label for="userName">Email or Phone</Label>
                                <Input className="form-control" type="text" name="userName" placeholder="Email" onChange={this.handleChange} />
                                <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['userName'] ? "This Field is required" : ""}</span>

                            </FormGroup>
                            <FormGroup className="form-label-group py-2">
                                <Label for="examplePassword">Password</Label>
                                <Input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['password'] ? "Password is required" : ""}</span>

                            </FormGroup>
                            <FormGroup check className="ml-2 my-3">
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Remember password
                                </Label>
                            </FormGroup>
                            {this.state.authError && <Alert className="mt-3" color="danger">
                                {this.state.authError}
                            </Alert>}
                            <Button className="btnlogin py-2 my-4 btn btn-lg btn-primary btn-block text-uppercase" color="primary" block>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
