import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImgAccount from "../img/Account.svg";
import ImgPassword from "../img/Password.svg";
import ImgBackground from "../img/background.gif";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!email || !password){
        console.log("te falta un dato galan");
        } else { 
        console.log("Informacion enviada")
        }
    };

    //HTML section
    return (
    <div className="LogIn-Page Centered-Container">
        <div className="Bakground"/>

        <div className="Form-Container">
            <div className="Centered-Container">
                <h1>Inicio de sesion</h1>
            </div>
                
            <form className="LogInForm-Container Centered-Container" onSubmit={handleSubmit}>
                {/* Account textbox */}
                <div className="TextBox-Container">
                    <img src={ImgAccount} alt="ImgAccount"/>
                    <input className="TextBox" type="email" placeholder="Correo electronico" name="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <img src={ImgPassword} alt="ImgPassword"/>
                    <input className="TextBox" type="password" placeholder="Contraseña" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                
                <button className="Button" type="submit" >Iniciar sesion</button>
            </form>
                
            {/* Submit button */}
            <div className="FormButtons-Container Centered-Container">
                <a onClick={() => navigate("/home")}>olvide contraseña</a>
            </div>
        </div>
    </div>
    )
}
