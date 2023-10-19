import './App.css'
import Accountimg from "./img/Account.svg"
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <div id="root"></div>
        <div className="LogInContainer">
          <div className="TitleContainer">
            <label className="Title">Inicio de sesion</label>
          </div>
              
          <form className="LogInFormContainer" onSubmit={handleSubmit}>
            <img className="aimg" src={Accountimg} alt="Accountimg" />
            <input className="TextBox" type="text" placeholder="Correo electronico" name="email" value={email}  onChange={(event) => setEmail(event.target.value)}/>
            <input className="TextBox" type="password" placeholder="Contraseña" name="password"  value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button className="Button" type="submit">Iniciar sesion</button>
          </form>
            
          <div className="FormButtonsContainer">
            <button className="TextButton">olvide contraseña</button>
          </div>
        </div>
    </>
  )
}

export default App
