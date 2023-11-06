

export default function RegisterForm() {

    //Check the email and password meets the requirements
    const handleSubmit = (event) => {

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
                    <input className="TextBox" type="text" placeholder="Name"/>
                </div>

                {/* Last name textbox */}
                <div className="">
                    <input className="TextBox" type="text" placeholder="Last Name"/>
                </div>

                {/* Account textbox */}
                <div className="TextBox-Container">
                    <input className="TextBox" type="email" placeholder="Correo electronico"/>
                </div>

                {/* Password textbox */}
                <div className="TextBox-Container">
                    <input className="TextBox" type="password" placeholder="Contraseña"/>
                </div>
            </div>

             {/* Submit button */}
             <div className="SubmitButtons-Container Centered-Container">
                <button className="Button" type="submit">Registrar</button>
                <a onClick={GoBack}>Ya tengo una cuenta</a>
            </div>
        </form>     
    </div>
  )
}
