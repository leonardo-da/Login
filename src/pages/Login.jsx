import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImgAccount from "../img/Account.svg";
import ImgPassword from "../img/Password.svg";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    if(!email || !password){
      console.log("te falta un dato galan")
    }else{ 
      console.log("Informacion enviada")
    }
    };

    //HTML section
    return (
    <div className="LogIn-Body Centered-Container">
        <div className="LogIn-Container">
            <div className="Title-Container Centered-Container">
                <label className="Title">Inicio de sesion</label>
            </div>
                
            <form className="LogInForm-Container Centered-Container" onSubmit={handleSubmit}>
                {/* Account textbox */}
                <div className="TextBox-Container">
                    <img className="TextBox-Image" src={ImgAccount} alt="ImgAccount"/>
                    <input className="TextBox" type="email" placeholder="Correo electronico" name="email" /* value={email}  onChange={(event) => setEmail(event.target.value)}*/ />
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <img className="TextBox-Image" src={ImgPassword} alt="ImgPassword"/>
                    <input className="TextBox" type="password" placeholder="Contraseña" name="password"  /*value={password} onChange={(event) => setPassword(event.target.value)}*/ />
                </div>
                
                <button className="Button" type="submit" >Iniciar sesion</button>
            </form>
                
            <div className="FormButtons-Container Centered-Container">
                <button className="TextButton" onClick={() => navigate("/home")}>olvide contraseña</button>
            </div>
        </div>
    </div>
    )
}
