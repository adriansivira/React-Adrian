import React, { useState } from 'react'
import { Boton } from './Boton'
import "../App.css"

export const Reserva = ({indice, usuario, deleteUser, setAsistidos}) => {
    const [asiste, setAsiste] = useState(false)
    const i = indice

    const manejarAsist = () => {
      setAsiste(!asiste)
      setAsistidos(estadoPrevio => estadoPrevio + 1)
    }
  
    return (
    <li className='reserva' key={i}>
        <p className={asiste? 'asistente' : ""}>{usuario.nombre} - {usuario.apellido} - {usuario.telefono}</p>
        <Boton texto="Asistió" disabled={asiste} onClick={manejarAsist}/>
        {asiste? null : <Boton texto="X" variante="peligro" onClick={(e) => {deleteUser(i)}} />}
        
    </li>
  )
}
 