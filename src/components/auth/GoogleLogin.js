import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import credentials from '../../config/server';



const CLIENT_ID = credentials.clientId;

console.log("CLIENT_ID", CLIENT_ID)

class GoogleBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogined: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login(response) {
        console.log("response", response)
        if (response.accessToken) {
            
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
        }
    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        console.log("response", response)
        // alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        // alert('Failed to log out')
    }

    render() {
        console.log("this.state.accessToken", this.state.accessToken)
        return (
            <div>
                { this.state.isLogined ?
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText='Logout'
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText='Login'
                        onSuccess={this.login}
                        onFailure={this.handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                    />
                }
                { this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null}

            </div>
        )
    }
}

export default GoogleBtn;