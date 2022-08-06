
import React, { useState } from 'react'
import { Boton } from './Boton'

export const LoginMozos = ({ setEstaLogeado }) => {

  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")
  const [selogeo, setSelogeo] = useState(false)

  
  const manejarNombre = (e) => {
    setNombre(e.target.value)
  }
  const manejarPassword = (e) => {
    setPassword(e.target.value)
  }
  
  const login = (e) => {
    //Cargar info del mozo
    const datos = InformacionDeMozos[nombre]
    // esto por si no hay datos
    if (!datos) {
        alert("Error, la cagaste")
        return
    }

    if (password !== datos.password) {
      alert("Error, contraseña inválida")
      return
    }

    // Ahora todo lo que está acá está bien
    setEstaLogeado(true)
    setSelogeo(true)
}

  const logout = () => {
    setNombre("")
    setPassword("")
    setEstaLogeado(false)
    setSelogeo(false)
  }

  return (
    <div>
      <h3>Login</h3>
      { selogeo? <Boton texto="Cerrar Sesión" onClick={logout}/>  :
        <>
          <div>
            <label>Nombre</label>
            <input onChange={manejarNombre} value={nombre} type="text"/>
          </div>
          <div>
            <label>Contraseña</label>
            <input onChange={manejarPassword} value={password} type="password"/>
          </div>
          <Boton texto="Ingresar" onClick={login}/>
        </>
        }
    </div>
  )
}

export const InformacionDeMozos = {
	"Julian": {
		id: 1,
		password: "1234",
		edad: 23,
		apellido: "Perez",
		horario: "diurno",
		background: "red",
	},

	"Florencia": {
		id: 2,
		password: "5678",
		edad: 25,
		apellido: "Perez",
		horario: "diurno",
		background: "blue",
	},

  "Josefina": {
		id: 3,
		password: "1",
		edad: 23,
		apellido: "Perez",
		horario: "nocturno",
		background: "aquamarine",
	},
	"Juan": {
		id: 4,
		password: "1",
		edad: 19,
		apellido: "Gomez",
		horario: "matutino",
		background: "orange",
	}
}



