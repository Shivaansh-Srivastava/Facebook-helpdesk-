import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import {TextField} from "@mui/material";

class DisConnectPage extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn: true
        }
        this.openDisconnect=this.openDisconnect.bind(this)
        this.openMessenger=this.openMessenger.bind(this)
    }

    openDisconnect()
    {
        window.location.href='/login'
    }

    openMessenger()
    {
        window.location.href='/messenger'
    }

    render()
    {
        return(
            <div className="dcp-page">
                <div className="dcp-page-box">
                    <p id="dcp-page-main-title">Facebook Page Integration</p>
                    <p id="dcp-page-nm-title">Integrated Page: <strong>Amazon Business</strong></p>
                    <div className="dcp-buttons">
                        <ul className="dcp-list">
                            <li>
                            <Button variant="contained" sx={{
                                width: '330px',
                                height: '45px',
                                backgroundColor:'red'
                            }}
                            onClick={this.openDisconnect}>Delete Integration</Button>
                            </li>
                            <li>
                            <Button variant="contained" sx={{
                                width: '330px',
                                height: '45px',
                            }}
                            onClick={this.openMessenger}
                            >Reply To Messages</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisConnectPage