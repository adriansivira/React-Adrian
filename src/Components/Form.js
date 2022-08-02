import React, { useState } from 'react'
import "../Components/Form.css"
import { Boton } from './Boton'


export const Form = ({agregarUsuario}) => {

    //usestate para generar cambios de estados y asignar valores al objeto
    //es lo primero que se crea después del form
    const [persona, setPersona] = useState([{
        nombre: "",
        apellido: "",
        correo: "",
        telefono: ""
    }])

// este evento pasa el name y value dinamicamente (los agarra de e.target)
// es lo mismo que usar e.target.value y e.target.name
//agarra la funcion de usestate y devuelve valores anteriores y les suma los nuevos
const manejarForm = (e) => {
    const {name , value} = e.target 
    setPersona(previoPer => ({ ...previoPer, [name]: value }))
}


// Este evento ejecuta la función manejarRegistro (en app.js)
// pasa el estado persona como parámetro y lleva el objeto a app.js
const manejarRegistro = (e) => {
    agregarUsuario(persona)
    reset() 
}

// Funcion para resetear el formulario cada vez que se haga clic en boton.
//  Se declara en manejar registro, que es la que le da funcionalidad al boton al clic
const reset = () => {
    setPersona({nombre: "",
        apellido: "",
        correo: "",
        telefono: ""})
}

let Invalido = persona.nombre === "" || persona.apellido === "" || persona.correo === "" || persona.telefono === ""



  return (
    <div className='form'>
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value={persona.nombre} onChange={manejarForm}/>
        </div>
        <div>
            <label>Apellido</label>
            <input type="text" name="apellido" value={persona.apellido} onChange={manejarForm}/>
        </div>
        <div>
            <label >Correo</label>
            <input type="text" name="correo" value={persona.correo} onChange={manejarForm}/>
        </div>
        <div>
            <label >Teléfono</label>
            <input type="text" name="telefono" value={persona.telefono} onChange={manejarForm}/>
        </div>
          <Boton texto="Enviar" disabled={Invalido} onClick={manejarRegistro} /> 
            
    </div>
  )
}
