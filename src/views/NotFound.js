import React from 'react';
import './NotFound.scss'


export default function DisplayMessage(props) {

    if (!props.hasOwnProperty('message')) {
        return (
            <div className="container my-5 emp-profile profile">
                <div class="error-box my-5" >
                    <div class="error-body text-center">
                        <h1 class="error-title text-danger" style={{
                            "text-shadow": " 4px 4px 0 #fff, 6px 6px 0 #263238",
                            "font-size": "150px", "line-height": "150px", "font-weight": "900"
                        }}>404</h1>
                        <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                        <p class="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                        <a href="/" class="btn btn-danger btn-rounded waves-effect waves-light mb-5" style={{ "border-radius": "60px", "padding": "7px 18px" }}>Back to home</a>
                    </div>
                </div>
            </div>
        );
    }
}