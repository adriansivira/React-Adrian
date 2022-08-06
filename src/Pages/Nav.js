import React from 'react'
import { Boton } from '../Components/Boton'
import "./Nav.css"
import { Link } from "react-router-dom";

export const Nav = ({ estaLogeado, setEstaLogeado }) => {
  return (
    <nav>
        <div>
            <Link to="/">
                <a>Inicio</a>
            </Link>
            <Link to="/mozos">
                <a>Lista de Mozos</a>
            </Link>
        </div>
        {estaLogeado? (<Boton texto="Cerrar Sesión" onClick={() => setEstaLogeado(false)}/>) : (<Link to="/login">
                <Boton texto="Ingresar" />
            </Link>)
        
            }    
    </nav>
  )
}
