import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { db,usersCollectionRef } from './firebase'
import { collection,getDocs } from 'firebase/firestore'

class Login extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn: true
        }
        this.openFBIntegration=this.openFBIntegration.bind(this)
    }

    async openFBIntegration()
    {
        if(this.email.value!=='' && this.password.value!=='')
        {
            const usersCollection=await getDocs(usersCollectionRef)
            const usersList=usersCollection.docs.map(doc => doc.data())
            for(let i=0;i<usersList.length;i++)
            {
                if(usersList[i].email===this.email.value && usersList[i].password===this.password.value)
                {
                    window.location.href='/fblogin'
                }
            }
        }
        else
        {
            alert('Some Fields are missing.')
        }
        
    }

    render()
    {
        return(
            <div className="login-page">
                <div className="login-page-box">
                    <p id="login-page-main-title">Login to your account</p>
                    <form className="login-page-form">
                    <ul className="login-page-list">
                        <li>
                            <p>Email</p>
                            <input type="text" id="email_login" ref={value => this.email=value}/>
                        </li>
                        <li>
                            <p>Password</p>
                            <input type="text" id="password_login" ref={value => this.password=value}/>
                        </li>
                        <li>
                            <input type="checkbox" id="remember_me" name="remember_me" value="yes"/>
                            <label for="remember_me">Remember Me</label>
                        </li>
                        <li>
                            <Button variant="contained" sx={{
                                width: '330px',
                                height: '45px',
                            }
                            } onClick={this.openFBIntegration}>Login</Button>
                        </li>
                    </ul>
                    </form>
                    <p id="to_sign_in">New to MyApp? <Link to='/'>Sign Up</Link></p>
                </div>
            </div>
        )
    }
}

export default Login