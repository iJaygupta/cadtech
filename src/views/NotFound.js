import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from 'reactstrap';


export default function DisplayMessage(props) {

    if (!props.hasOwnProperty('message')) {
        return (
            <Container className="mt-9">
                <div className="card">
                    <div className="card-body" >
                        <h2 className="font-weight-bold" style={{ "textAlign": "center" }}> 404</h2>
                        <h3>Oops ! Page Not Found</h3>
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