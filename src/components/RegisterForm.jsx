import { doc, setDoc, addDoc,collection } from "firebase/firestore";
import { useState } from "react";
import {db} from '../../src/assets/Config/firestore';

export default function RegisterForm() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');


    //Check the email and password meets the requirements
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!email || !password || !name || !lastname){
            console.log("no mames perro")
        }else{
            const docRef = await addDoc(collection(db, "USER"), {
                Password: password,
                Name: name,
                Email: email,
                Lastname: lastname
              });
              console.log("Document written with ID: ", docRef.id);
        }
    }

    //Restore the traslate property to back to the login form
    function GoBack() {
        const Component = document.querySelector(".CarouselForm-Container");
        Component.style = "transform: traslateY(0); transition: 2s ease;";
    }

    //HTML section
    return (
    <div className="RegisterForm-Component">
        <h1 className="Centered-Container">Crear Cuenta</h1>
                        
        <form className="FormContent-Container" onSubmit={handleSubmit}>
            <div className="Fields-Container">
                {/* Name textbox */}
                <div className="">
                    <input className="TextBox" type="text" placeholder="Name" name="name" value={name}  onChange={(e) => setName(e.target.value)}/>
                </div>

                {/* Last name textbox */}
                <div className="">
                    <input className="TextBox" type="text" placeholder="Last Name" value={lastname}  onChange={(e) => setLastname(e.target.value)}/>
                </div>

                {/* Account textbox */}
                <div className="TextBox-Container">
                    <input className="TextBox" type="email" placeholder="Correo electronico" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <input className="TextBox" type="password" placeholder="Contraseña" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>

            <p className="ErrorMessage"></p>

             {/* Submit button */}
             <div className="SubmitButtons-Container Centered-Container">
                <button className="Button" type="submit">Registrar</button>
                <a onClick={GoBack}>Ya tengo una cuenta</a>
            </div>
        </form>     
    </div>
  )
}
