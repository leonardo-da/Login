import React from 'react'
import LogInForm from "../components/LogInForm"
import RegisterForm from "../components/RegisterForm"


export default function Login() {
    //HTML section
    return (
    <div className="LogIn-Page Centered-Container">
        <div className="Bakground"/>

        <div className="Form-Container">
            <div className="CarouselForm-Container">
                
                <RegisterForm/>
            </div>
        </div>
    </div>
    )
}
