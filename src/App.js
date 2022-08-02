import { useState } from 'react';
import './App.css';
import { Boton } from './Components/Boton';
import { Form } from './Components/Form';
import { Reserva } from './Components/Reserva';





function App() {

  // se crea un array para imprimir la lista abajo
  const [usuarios, setUsuarios] = useState([])
  const [asistidos, setAsistidos] = useState(0)

  // se agarra el parámetro (usuario) que a su vez es el objeto 
  //que está en form.js (declarado en manejar registro)
  // por eso es que enlaza el objeto 
  const agregarUsuario = (usuario) => {
    setUsuarios(previoUsu => {
      const res = [...previoUsu, usuario] 
      return res
    })
  }

  // Esta funcion no puede ejecutarse como evento, por eso hay
  //que llamarla a través de otra funciuon que está en la prop onclick

  const deleteUser = (index) => {
    setUsuarios(previoUsu => {
      const res = [...previoUsu] 
      res.splice(index,1)
      return res
    })
  }

// Para determinar si un usuario asistió

const manejarAsistio = (index) => {
    alert("El usuario con el índice" + index + "asistió")
}



// usuario es el parámetro y se maneja en app.js como si fuera el objeto
  return (
    <div className="App">
      <div className='container'>
      <loginDe/>
        <p>Registro de reservas</p>
        <div>
        
          <Form agregarUsuario={agregarUsuario}/>
        </div>
        <p>Hay {usuarios.length} reservas</p>
        <p>Hubo {asistidos} asistencias</p>
        <p>Se borraron X reservas</p>
        <ul>
          {usuarios.map((usuario, i) => {
            return <Reserva 
            key={i} 
            indice={i}
            usuario={usuario} 
            deleteUser={deleteUser} 
            manejarAsistio={manejarAsistio}
            setAsistidos={setAsistidos}/>
          
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//Agregar botones al li para quitar opciones
//agregar un select para ponerle intensidad al ejercicio