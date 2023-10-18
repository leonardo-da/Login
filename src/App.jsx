import { Form } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <div id="root"></div>
        <div class="LogInForm">
          <label class="Title">Inicio de sesion</label>
        
          <label>Correo electronico:</label>
          <input class="TextBox" type="text"/>
          <label>Contraseña:</label>
          <input class="TextBox" type="password"/>
          
          <div>
            <button>Iniciar sesion</button>
            <button>olvide contraseña</button>
          </div>
        </div>
    </>
  )
}

export default App
