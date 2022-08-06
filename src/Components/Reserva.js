import React, { useState } from 'react'
import { Boton } from './Boton'
import "../App.css"

export const Reserva = ({indice, usuario, deleteUser, setAsistidos, hayMozo}) => {
    const [asiste, setAsiste] = useState(false)
    const i = indice

    const manejarAsist = () => {
      setAsiste(!asiste)
      // setAsistidos(estadoPrevio => estadoPrevio + 1)
    }
  
    return (
    <li className='reserva' key={i}>
        <p className={asiste? 'asistente' : ""}>{usuario.nombre} - {usuario.apellido} - {usuario.telefono}</p>
        { hayMozo? <Boton texto="Asistió" disabled={asiste} onClick={manejarAsist}/> : null }
        {asiste || !hayMozo? null : <Boton texto="X" variante="peligro" onClick={(e) => {deleteUser(i)}} />}
        
    </li>
  )
}
 