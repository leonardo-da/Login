import './App.css'
import ImgAccount from "./img/Account.svg";
import ImgPassword from "./img/Password.svg";
import { useState } from 'react';

function App() {
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
  return (
    <>
      <div id="root"></div>
        <div className="LogIn-Container">
          <div className="Title-Container, Centered-Container">
            <label className="Title">Inicio de sesion</label>
          </div>
              
          <form className="LogInForm-Container, Centered-Container" onSubmit={handleSubmit}>
            {/* Account textbox */}
            <div className="TextBox-Container">
              <img className="TextBox-Image" src={ImgAccount} alt="ImgAccount"/>
              <input className="TextBox" type="email" placeholder="Correo electronico" name="email" value={email}  onChange={(event) => setEmail(event.target.value)}/>
            </div>
            {/* Password textbox */}
            <div className="TextBox-Container">
              <img className="TextBox-Image" src={ImgPassword} alt="ImgPassword"/>
              <input className="TextBox" type="password" placeholder="Contraseña" name="password"  value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            
            <button className="Button" type="submit">Iniciar sesion</button>
          </form>
            
          <div className="FormButtons-Container, Centered-Container">
            <button className="TextButton">olvide contraseña</button>
          </div>
        </div>
    </>
  )
}

export default App
