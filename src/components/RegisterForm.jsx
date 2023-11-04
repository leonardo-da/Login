import React from 'react'
import Combobox from "react-widgets/Combobox"

export default function RegisterForm() {
  //HTML section
  return (
    <div className="RegisterForm-Component">
                        
        <form className="" >
            {/* Name textbox */}
            <div className="">
                <input className="" type="text" placeholder="Name"/>
            </div>
            {/* Last name textbox */}
            <div className="">
                <input className="" type="text" placeholder="Last Name"/>
            </div>
            {/* genre textbox */}
            <div className="">
              <Combobox defaultValue="Male" data={["Male","Female","39 gay"]}/>
            </div>
            {/* Account textbox */}
            <div className="">
                <input className="" type="email" placeholder="Correo electronico"/>
            </div>
            {/* Password textbox */}
            <div className="">
                <input className="" type="password" placeholder="Contraseña"/>
            </div>
            {/* Submit button */}
            <div className="">
                <button className="Button" type="submit">Registrar</button>
            </div>
        </form>
            
        
    </div>
  )
}
