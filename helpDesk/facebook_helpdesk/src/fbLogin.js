import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import FacebookLogin from 'react-facebook-login'

class FBLogin extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn: false
        }
        this.responseFacebook=this.responseFacebook.bind(this)
        this.componentClicked=this.componentClicked.bind(this)
    }

    responseFacebook = (response) => {
        console.log(response);
        window.location.href='/connection'

      }

    componentClicked()
    {
        console.log('Button clicked')
    }

    render()
    {
        return(
            <div className="fbLogin-page">
                <div className="fbLogin-page-box">
                    <p id="fbLogin-page-main-title">Facebook Page Integration</p>
                    <div className="fbLogin-button">
                        <FacebookLogin
                            textButton="Connect Page"
                            appId="1118504745458223"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} 
                            cssClass="fb-btn"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FBLogin