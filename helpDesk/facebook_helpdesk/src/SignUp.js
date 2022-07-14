import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { usersCollectionRef } from "./firebase"
import { addDoc } from 'firebase/firestore'

class SignUp extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn: true
        }
        this.openLogin=this.openLogin.bind(this);
    }

    async openLogin()
    {
        if(this.new_email.value!=='' && this.new_name.value!=='' && this.new_password.value!=='')
        {
            await addDoc(usersCollectionRef,{ email: this.new_email.value, password: this.new_password.value,name:this.new_name.value})
            window.location.href="/login"
        }
        else
        {
            alert("Some Fields are empty.")
        }
    }

    render()
    {
        return(
            <div className="SignUp-page">
                <div className="SignUp-page-box">
                    <p id="SignUp-page-main-title">Create Account</p>
                    <form className="SignUp-page-form">
                    <ul className="SignUp-page-list">
                        <li>
                            <p>Name</p>
                            <input type="text" id="new_name" ref={value=>this.new_name=value}/>
                        </li>
                        <li>
                            <p>Email</p>
                            <input type="text" id="new_password" ref={value=>this.new_email=value}/>
                        </li>
                        <li>
                            <p>Password</p>
                            <input type="text" id="new_password" ref={value=>this.new_password=value}/>
                        </li>
                        <li>
                            <input type="checkbox" id="remember_me_sigin" name="remember_me_sigin" value="yes"/>
                            <label for="remember_me_sigin">Remember Me</label>
                        </li>
                        <li>
                            <Button variant="contained" sx={{
                                width: '330px',
                                height: '45px',
                            }
                            } 
                            onClick={this.openLogin}>Sign Up</Button>
                        </li>
                    </ul>
                    </form>
                    <p id="to_log_in">Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        )
    }
}

export default SignUp