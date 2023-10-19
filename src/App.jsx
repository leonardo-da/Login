import { Form } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <div id="root"></div>
        <div class="LogInFormContainer">
          <label class="Title">Inicio de sesion</label>
        
          <label>Correo electronico:</label>
          <input class="TextBox" type="text"/>
          <label>Contraseña:</label>
          <input class="TextBox" type="password"/>
          
          <button Class="Button">Iniciar sesion</button>
          <button Class="Button">olvide contraseña</button>
        </div>
    </>
  )
}

export default App
