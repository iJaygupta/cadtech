import React, { useState } from 'react';
import { Container, CardImg, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from 'reactstrap';
import { register } from "../../actions/authAction";
import './Register.scss'

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');


    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value)
        } else if (e.target.id === 'email') {
            setEmail(e.target.value.trim())
        } else {
            setPassword(e.target.value.trim())
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register({ name, email, password }, (response) => {
            if (response && response.status == "OK") {
                props.history.push("/login");
            } else {
                setAuthError(response.message);
            }
        });
    };

    return (
        <Container className="mt-5 register">

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
                                    <Label for="firstname">First Name *</Label>
                                    <Input className="form-control" type="text" id="firstname" placeholder="First Name *" />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="lastname">Last Name *</Label>
                                    <Input className="form-control" type="text" id="lastname" placeholder="last name" />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="password">Password *</Label>
                                    <Input className="form-control" type="password" id="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="cpassword">Confirm Password *</Label>
                                    <Input className="form-control" type="password" id="confirm password" placeholder="confirm password" />
                                </FormGroup>
                                <Row form className="maxl ml-4 form-label-group">
                                    <Col md={3}>
                                        <FormGroup >
                                            <Label className="radio inline" for="gender">
                                                <Input type="radio" name="gender" value="male" checked />
                                                Male
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label className="radio inline" for="gender">
                                                <Input type="radio" name="gender" value="female" />
                                                Female
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <FormGroup className="form-label-group">
                                    <Label for="email">Your Email *</Label>
                                    <Input className="form-control" type="email" id="lastname" placeholder="Email" />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="mobile">Your Mobile No *</Label>
                                    <Input className="form-control" type="text" id="mobile" placeholder="First Name" />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="sequrity"></Label>
                                    <Input className="" type="select" name="select" id="sequrity">
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
                                    <Input className="form-control" type="text" id="answer" placeholder="Your Answer" />
                                </FormGroup>
                                <Button className="btnRegister py-2 my-4 btn btn-lg btn-primary btn-block text-uppercase btn btn-primary btn-block" color="primary" size="sm" block>Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            {/* 
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-center mb-2">
                                <div className="d-flex align-items-center">
                                    <span className="text-primary mr-2">
                                        <i className="fas fa-lock" />
                                    </span>
                                </div>
                                <h2 className="text-uppercase text-primary font-weight-bold mb-0">Register</h2>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" value={name} id="name" placeholder="Name" pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." onChange={handleChange} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" value={email} id="email" placeholder="Email" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" value={password} id="password" placeholder="Password" pattern="[a-zA-Z0-9~!@#$%^&*]{6,}" title="Password must be atleast 6 characters. Should contain letters, number or special characters." onChange={handleChange} required />
                                </FormGroup>
                                <Button color="primary" size="sm" block>Register</Button>
                            </Form>
                            {authError && <Alert className="mt-3" color="danger">
                                {authError}
                            </Alert>}
                        </CardBody>
                    </Card>
                </Col>
            </Row> */}
        </Container>
    );
};

export default Register;