import { useState } from "react";
import { doc, setDoc, addDoc,collection } from "firebase/firestore";
import {db} from '../../src/assets/Config/firestore';

export default function RegisterForm({ DisplaceToForm }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [ErrorMessage, SetErrorMessage] = useState('');


    //Check the email and password meets the requirements
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!email || !password || !name || !lastname){
            SetErrorMessage("¡te falta un dato galan!");
        }
        else
        {
            const docRef = await addDoc(collection(db, "USER"), {
                Password: password,
                Name: name,
                Email: email,
                Lastname: lastname
              });

              console.log("Document written with ID: ", docRef.id);
        }
    }

    //HTML section
    return (
    <div className="Form-Component">
        <h1 className="Centered-Container">Crear Cuenta</h1>
                        
        <form className="FormContent-Container" onSubmit={handleSubmit}>
            <div className="Fields-Container">
                {/* Register fields of the form */}
                <input className="TextBox" type="text" placeholder="Name" name="name" value={name}  onChange={(e) => setName(e.target.value)}/>
                <input className="TextBox" type="text" placeholder="Last Name" value={lastname}  onChange={(e) => setLastname(e.target.value)}/>
                <input className="TextBox" type="email" placeholder="Correo electronico" value={email}  onChange={(e) => setEmail(e.target.value)}/>
{/* => */}      <input className="TextBox" type="text" placeholder="Numero de telefono"/>
                <input className="TextBox" type="password" placeholder="Contraseña" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <p className="ErrorMessage">{ErrorMessage}</p>

             {/* Submit button */}
             <div className="SubmitButtons-Container Centered-Container">
                <button className="Button" type="submit">Registrar</button>
                <a onClick={ () => DisplaceToForm(2, true) }>Ya tengo una cuenta</a>
            </div>
        </form>     
    </div>
  )
}
