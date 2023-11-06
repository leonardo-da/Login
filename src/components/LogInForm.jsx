import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImgAccount from "../img/Account.svg";
import ImgPassword from "../img/Password.svg";
import {db} from '../../src/assets/Config/firestore';
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { useEffect } from 'react';

export default function LogInForm() 
{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Check the email and password meets the requirements
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password) {
            console.log("te falta un dato galan");        

            const Error = document.querySelector(".ErrorMessage");
            Error.textContent = "¡te falta un dato galan!";
        } 
        else { 
            const q = query(collection(db, "USER"), where("Email", "==", email), where("Password", "==", password));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                if(doc.id, " => ", doc.data()){
                    console.log("si")
                    console.log(doc.id, " => ", doc.data());
                }else{
                    console.log("NO")
                    console.log(doc.id, " => ", doc.data());
                }
              });
            
            

            
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
                    <input className="TextBox" type="email" placeholder="Correo electronico" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <img src={ImgPassword} alt="ImgPassword"/>
                    <input className="TextBox" type="password" placeholder="Contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                {/* Password options */}
                <div className="Password-Options">
                    <div className="CheckBox-Container">
                        <input id="RenemberPasword-Checkbox" type="checkbox"/>
                        <label htmlFor="RenemberPasword-Checkbox">Recordar</label>
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