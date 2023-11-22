import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LogInForm from "../components/LogInForm"
import RegisterForm from "../components/RegisterForm"
import ForgotPassForm from "../components/ForgotPassForm"

export default function Login() 
{
    const [FormToShow, SetFormToShow] = useState(2);

    //Call the show correspongind form to load the page
    useEffect(() => {
        DisplaceToForm(FormToShow, false);
    }, []);

    //Get size of form and displace the carousel to form selected
    function DisplaceToForm(Value, Animation)
    {
        const   Component = document.querySelector(".CarouselForm-Container"),
                Form = document.querySelector(".Form-Component"),
                Displacement = Form.offsetHeight;

        Component.style = Animation? `transform: translateY(-${Displacement * (Value - 1)}px); transition: 2s; ease` : 
                                     `transform: translateY(-${Displacement * (Value - 1)}px);`;
    }

    //HTML section<ForgotPassForm/>
    return (
    <div className="LogIn-Page Centered-Container">
        <div className="Bakground"/>

        <div className="Form-Container">
            <div className="CarouselForm-Container">
                <ForgotPassForm DisplaceToForm={DisplaceToForm}/>
                <LogInForm DisplaceToForm={DisplaceToForm}/>
                <RegisterForm DisplaceToForm={DisplaceToForm}/>
            </div>
        </div>
    </div>
    )
}
