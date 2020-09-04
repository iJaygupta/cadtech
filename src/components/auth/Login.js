import React, { Component, useState } from 'react';
import { login } from "../../actions/authAction";
import { Container, Row, CardImg, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Button, Alert } from 'reactstrap';
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
        if (value == '') {
            let errorParam = { ...this.state.errorParam };
            errorParam[name] = true;
            this.setState({ errorParam: errorParam })
        } else {
            this.setState({ [name]: value }, () => {
                let errorParam = { ...this.state.errorParam };
                errorParam[name] = false;
                this.setState({ errorParam: errorParam })
            })
        }
    };

    setAuthError(message) {
        this.setState({ authError: message })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.validateData()) {
            console.log("Validation Success");
            this.submitData();
        } else {
            this.setAuthError("Validation Failed");
            console.log("Validation Failed")
        }
    };

    submitData = () => {
        let { userName, password } = this.state;
        login({ userName, password }, (response) => {
            if (response && response.status == "OK") {
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
        console.log(this.state)
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
// profile");
//             } else {
//                 setAuthError(response.message);
//             }
//         });
//     };

//     return (
//         <Container className="mt-5 login">
//             <Row>
//                 <Col md="6" className="login-left">
//                     <CardImg width="100%" src="https://image.ibb.co/n7oTvU/logo_white.png" alt="Card image cap" />
//                     <h3>Welcome</h3>
//                     <p>You are 30 seconds away from earning your own money!</p>
//                     <a href="/register"><input type="submit" to="/login" name="" value="Register Now" /></a><br />
//                 </Col>
//                 <Col md="6" className="login-right">
//                     <Form className="form-signin login-form" onSubmit={handleSubmit}>
//                         <h3 className="text-uppercase text-center font-weight-bold mb-4">Login</h3>

//                         <FormGroup className="form-label-group py-2">
//                             <Label for="exampleEmail">Email or Phone</Label>
//                             <Input className="form-control" type="email" value={email} id="email" placeholder="Email" onChange={handleChange} />
//                         </FormGroup>
//                         <FormGroup className="form-label-group py-2">
//                             <Label for="examplePassword">Password</Label>
//                             <Input className="form-control" type="password" value={password} id="password" placeholder="Password" onChange={handleChange} />
//                         </FormGroup>
//                         <FormGroup check className="ml-2 my-3">
//                             <Label check>
//                                 <Input type="checkbox" id="checkbox2" />{' '}
//                                 Remember password
//                                 </Label>
//                         </FormGroup>
//                         {authError && <Alert className="mt-3" color="danger">
//                             {authError}
//                         </Alert>}
//                         <Button className="btnlogin py-2 my-4 btn btn-lg btn-primary btn-block text-uppercase" color="primary" block>Login</Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Login;