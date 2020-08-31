import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from 'reactstrap';
// import 'NotFound.scss'


export default function DisplayMessage(props) {

    if (!props.hasOwnProperty('message')) {
        return (
            <Container className="mt-9">
                <div className="">
                    <div className="" >
                        <div class="error-box" >
                            <div class="error-body text-center">
                                <h1 class="error-title text-danger" style={{
                                    "text-shadow": " 4px 4px 0 #fff, 6px 6px 0 #263238",
                                    "font-size": "150px", "line-height": "150px", "font-weight": "900"
                                }}>404</h1>
                                <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                                <p class="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                                <a href="index.html" class="btn btn-danger btn-rounded waves-effect waves-light mb-5" style={{ "border-radius": "60px", "padding": "7px 18px" }}>Back to home</a> </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    } else {
        return (
            <div>
                {props.message}
            </div>
        );
    }
}