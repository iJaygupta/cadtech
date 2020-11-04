import React from "react";
import HeadingTitle from "../../utils/HeadingTitle";
import './ChangePassword.css';



export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="service-view">
                <section id="service-list">
                    <div className="container">
                        <HeadingTitle
                            title={"Change Password"}
                            description={
                                "Detail significant learning experiences and benefits students can expect"
                            }
                            titleColor={"#213b52"}
                        />
                        <div className="row items-services">
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}
