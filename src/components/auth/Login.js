import React, { useState } from 'react';
import { login } from "../../actions/authAction";
import { Container, Row, CardImg , Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './Login.scss'
const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');


    const handleChange = (e) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password }, (response) => {
            if (response && response.status == "OK") {
                props.history.push("/profile");
            } else {
                setAuthError(response.message);
            }
        });
    };

    return (
        <Container className="my-5 login">
                <Row>
                <Col md="6" className="login-left">
                    <CardImg  width="100%" src="https://image.ibb.co/n7oTvU/logo_white.png" alt="Card image cap"/>
                    <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="login Now"/><br/>
                </Col>
                <Col md="6" className="login-right">                    
                    <Form className="form-signin login-form"> 
                         <h3 className="text-uppercase text-center font-weight-bold mb-4">Login</h3>

                            <FormGroup className="form-label-group py-2">
                                <Label for="exampleEmail">Email</Label>
                                <Input className="form-control" type="email" value={email} id="email" placeholder="Email" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className="form-label-group py-2">
                                <Label for="examplePassword">Password</Label>
                                <Input className="form-control" type="password" value={password} id="password" placeholder="Password" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup check className="ml-2 my-3">
                                <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Remember password
                                </Label>
                            </FormGroup>
                            <Button className="btnlogin py-2 my-4 btn btn-lg btn-primary btn-block text-uppercase" color="primary" block>Login</Button>                            
                    </Form>
                </Col>
                </Row>
{/* login strat */}
            {/* <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    
                    <Card className="login-bg card-signin">
                        <CardBody>
                            <div className="d-flex justify-content-center mt-3 mb-4">
                                <div className="d-flex align-items-center">
                                    <span className="h4 mr-2">
                                        <i className="fas fa-lock" />
                                    </span>
                                </div>
                                <CardTitle className="text-uppercase font-weight-bold h4 card-title mb-0">Login</CardTitle>
                                </div>
                                <Form className="form-signin" onSubmit={handleSubmit}>
                                <FormGroup className="form-label-group">
                                    <Label for="exampleEmail">Email</Label>
                                    <Input className="form-control" type="email" value={email} id="email" placeholder="Email" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="form-label-group">
                                    <Label for="examplePassword">Password</Label>
                                    <Input className="form-control" type="password" value={password} id="password" placeholder="Password" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup check className="ml-2 my-3">
                                    <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Remember password
                                    </Label>
                                </FormGroup>
                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" color="primary" block>Login</Button>
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

export default Login;