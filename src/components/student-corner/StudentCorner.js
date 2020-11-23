import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from 'reactstrap';
import { toast } from 'react-toastify';


export default class StudentCorner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationId: "",
            dob: "",
            authError: "",
            errorParam: {
                registrationId: false,
                dob: false
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

    submitData = () => {
        toast.success("Certificate Get Succssfully", {
            position: toast.POSITION.TOP_RIGHT
        });
        window.open("https://cadtech-container.s3.ap-south-1.amazonaws.com/202693396215055.pdf");
    }

    render() {
        return (
            <Container className="mt-5">
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
                                    <h2 className="text-uppercase text-primary font-weight-bold mb-0">Certificates</h2>
                                </div>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="registrationId">Registration Number</Label>
                                        <Input type="text" value={this.state.registrationId} id="registrationId" name="registrationId" placeholder="Registration Number" pattern="[A-Za-z0-9_ ]{3,}" title="This is your role no at cadtech." onChange={this.handleChange} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dob">Date Of Birth</Label>
                                        <Input type="text" value={this.state.dob} id="dob" name="dob" placeholder="MM/DD/YYYY" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="captcha">Captcha</Label>
                                        <Input type="text" value={this.state.captcha} id="captcha" name="captcha" placeholder="Captcha" onChange={this.handleChange} required />
                                    </FormGroup>
                                    <Button color="primary" size="md" block>Downlaod Certificate</Button>
                                </Form>
                                {this.state.authError && <Alert className="mt-3" color="danger">
                                    {this.state.authError}
                                </Alert>}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

}
