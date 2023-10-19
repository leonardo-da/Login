import { Form } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <div id="root"></div>
        <div class="LogInContainer">
          <div className="TitleContainer">
            <label class="Title">Inicio de sesion</label>
          </div>
              
          <div class="LogInFormContainer">
            
            <input class="TextBox" type="text" placeholder="Correo electronico"/>
            <input class="TextBox" type="password" placeholder="Contraseña"/>
          </div>
            
          <div className="FormButtonsContainer">
            <button Class="Button">Iniciar sesion</button>
            <button Class="TextButton">olvide contraseña</button>
          </div>
        </div>
    </>
  )
}

export default App
