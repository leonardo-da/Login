import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImgAccount from "../img/Account.svg";
import ImgPassword from "../img/Password.svg";

export default function LogInForm() 
{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Check the email and password meets the requirements
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!email || !password) {
            console.log("te falta un dato galan");        

            const Error = document.querySelector(".ErrorMessage");
            Error.textContent = "¡te falta un dato galan!";
        } 
        else { 
            console.log("Informacion enviada")
        }
    };

    //Get size of form and displace the carousel to register form
    function CreateAccount() {
        const Component = document.querySelector(".CarouselForm-Container");
        const Form = document.querySelector(".LogInForm-Component");
        const Displacement = Form.offsetHeight;
        Component.style = `transform: translateY(-${Displacement}px); transition: 2s; ease`;
    }

    //HTML section
    return (
    <div className="LogInForm-Component">
        <h1 className="Centered-Container">Inicio de sesion</h1>
                        
        <form className="FormContent-Container" onSubmit={handleSubmit}>
            <div className="Fields-Container Centered-Container">
                {/* Account textbox */}
                <div className="TextBox-Container">
                    <img src={ImgAccount} alt="ImgAccount"/>
                    <input className="TextBox" type="email" placeholder="Correo electronico" name="email" value={email}  onChange={(event) => setEmail(event.target.value)}/>
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <img src={ImgPassword} alt="ImgPassword"/>
                    <input className="TextBox" type="password" placeholder="Contraseña" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                
                {/* Password options */}
                <div className="Password-Options">
                    <div className="CheckBox-Container">
                        <input id="RenemberPasword-Checkbox" type="checkbox"/>
                        <label for="RenemberPasword-Checkbox">Recordar</label>
                    </div>

                    <a onClick={() => navigate("/home")}>olvide contraseña</a>
                </div>
            </div>

            <p className="ErrorMessage"></p>
            
            {/* Submit buttons */}
            <div className="SubmitButtons-Container Centered-Container">
                <button className="Button" type="submit">Iniciar sesion</button>
                <a onClick={CreateAccount}>Crear una cuenta</a>
            </div>
        </form>
    </div>
  )
}