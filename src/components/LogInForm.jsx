import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImgAccount from "../img/Account.svg";
import ImgPassword from "../img/Password.svg";

export default function LogInForm() {
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
    <div className="LogInForm-Component">
        <div className="Centered-Container">
            <h1>Inicio de sesion</h1>
        </div>
                        
        <form className="LogInForm-Container Centered-Container" onSubmit={handleSubmit}>
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
            {/* Submit button */}
            <div className="LogInButtons-Container Centered-Container">
                <button className="Button" type="submit">Iniciar sesion</button>
                <a>Crear una cuenta</a>
            </div>
        </form>
    </div>
  )
}