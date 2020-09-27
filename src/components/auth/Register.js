import React, { Component } from 'react';
import { Container, CardImg, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from 'reactstrap';
import { register } from "../../actions/authAction";
import './Register.scss'
import { toast } from 'react-toastify';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: "",
            gender: "",
            education: "",
            authError: "",
            address: "",
            errorParam: {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                confirmPassword: false,
                mobile: false,
            }
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let errorParam = { ...this.state.errorParam };
        const notRequiredFields = ["address", "gender", "education", "email"];
        if (value == '' && !notRequiredFields.includes(name)) {
            errorParam[name] = true;
        } else {
            errorParam[name] = false;
        }
        this.setState({ [name]: value }, () => {
            this.setState({ errorParam: errorParam })
        })
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
        let { firstName, lastName, email, password, mobile, gender, education, address } = this.state;
        register({ firstName, lastName, email, password, mobile, gender, education, address }, (response) => {
            if (response && response.status == "OK") {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.props.history.push("/login");
            } else {
                this.setAuthError(response.message);
            }
        });
    }

    validateData = (event) => {
        let errorParam = { ...this.state.errorParam }
        let flag = false;
        let registerData = this.state;
        const notRequiredFields = ["address", "gender", "education", "email", "authError"];
        for (const key in registerData) {
            if (registerData[key] == '' && !notRequiredFields.includes(key)) {
                errorParam[key] = true;
                flag = true;
            }
        }
        if (registerData['password'] != registerData['confirmPassword']) {
            errorParam['confirmPassword'] = 1;
            flag = true;
        }
        this.setState({ errorParam: errorParam })
        return flag;
    }

    setAuthError(message) {
        this.setState({ authError: message })
    }

    render() {
        return (
            <Container className="my-5 register">

                <Row>
                    <Col md="3" className="register-left">
                        <CardImg width="100%" src="https://image.ibb.co/n7oTvU/logo_white.png" alt="Card image cap" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <a href="/login"><input type="submit" to="/login" name="" value="Login" /></a><br />
                    </Col>
                    <Col md="9" className="register-right">
                        <Form className="form-signin">
                            <h3 className="text-uppercase text-center font-weight-bold card-title mt-5">Register</h3>
                            <Row form className="row register-form">
                                <Col md={6}>
                                    <FormGroup className="form-label-group">
                                        <Label for="firstName">First Name *</Label>
                                        <Input className="form-control" type="text" name="firstName" placeholder="First Name *"
                                            onChange={this.handleChange}
                                        />
                                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['firstName'] ? "First Name is required" : ""}</span>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="lastName">Last Name *</Label>
                                        <Input className="form-control" type="text" name="lastName" placeholder="last name"
                                            onChange={this.handleChange}
                                        />
                                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['lastName'] ? "Lastname is required" : ""}</span>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="password">Password *</Label>
                                        <Input className="form-control" type="password" name="password" placeholder="password"
                                            onChange={this.handleChange}
                                        />
                                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['password'] ? "Password is required" : ""}</span>

                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="confirmPassword">Confirm Password *</Label>
                                        <Input className="form-control" type="password" name="confirmPassword" placeholder="Confirm password"
                                            onChange={this.handleChange}
                                        />
                                        <span style={{ "color": "red" }} className="errorMsg ml-3">{(this.state.errorParam['confirmPassword'] === true) ? "Confirm password is required" : (this.state.errorParam['confirmPassword'] === 1) ? "Enter same password as above" : ""}</span>

                                    </FormGroup>
                                    <Row form className="maxl ml-4 form-label-group">
                                        <Col md={3}>
                                            <FormGroup >
                                                <Label className="radio inline" for="gender">
                                                    <Input type="radio" name="gender" value={"male"}
                                                        onChange={this.handleChange}
                                                    />
                                                    Male
                                            </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label className="radio inline" for="gender">
                                                    <Input type="radio" name="gender" value="female"
                                                        onChange={this.handleChange}
                                                    />
                                                    Female
                                            </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <FormGroup className="form-label-group">
                                        <Label for="email">Your Email </Label>
                                        <Input className="form-control" type="text" name="email" placeholder="Email"
                                            onChange={this.handleChange}
                                        />

                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="mobile">Your Mobile No *</Label>
                                        <Input className="form-control" type="text" name="mobile" placeholder="First Name"
                                            onChange={this.handleChange}
                                        />
                                        <span style={{ "color": "red" }} className="errorMsg ml-3">{this.state.errorParam['mobile'] ? "Mobile is required" : ""}</span>

                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="sequrity"></Label>
                                        <Input className="" type="select" name="select" name="education" 
                                            onChange={this.handleChange}
                                        >
                                            <option className="hidden" selected disabled>Please select your Education </option>
                                            <option>B-Tech </option>
                                            <option>B.Sc</option>
                                            <option>BBA</option>
                                            <option>MBA</option>
                                            <option>BA</option>
                                            <option>B-Pharm</option>

                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="form-label-group">
                                        <Label for="answer">Enter Your Address</Label>
                                        <Input className="form-control" type="text" name="address" placeholder="Your Answer"
                                            onChange={this.handleChange}

                                        />
                                    </FormGroup>
                                    <Button className="btnRegister py-2 my-4 btn btn-lg btn-primary btn-block text-uppercase btn btn-primary btn-block" color="primary" size="sm" block
                                        onClick={this.handleSubmit}
                                    >Register</Button>
                                </Col>
                                {this.state.authError && <Alert className="mt-3" color="danger">
                                    {this.state.authError}
                                </Alert>}
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
