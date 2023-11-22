import React from 'react'
import { useState } from 'react';

export default function ForgotPassForm({ DisplaceToForm }) 
{
    const [ErrorMessage, SetErrorMessage] = useState('');

     //HTML section
    return (
        <div className="Form-Component">
            <h1 className="Centered-Container">Recupera tu cuenta</h1>

            <form className="FormContent-Container Centered-Container">
                <div className="Fields-Container Centered-Container">
                    <label className="TextBox-Message">Ingresa tu correo electrónico o número de celular para buscar tu cuenta.</label>
                    <input className="TextBox" type="text" placeholder="Correo electronico" name="name"/>
                </div>

                <p className="ErrorMessage">{ErrorMessage}</p>

                {/* Submit button */}
                <div className="SubmitButtons-Container Centered-Container">
                    <button className="Button" type="submit">Enviar codigo</button>
                    <a onClick={ () => DisplaceToForm(2, true) }>Cancelar</a>
                </div>
            </form>
        </div>
    )
}
