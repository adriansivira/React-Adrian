import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { LoginMozos } from "./Components/LoginMozos";
import { ListaDeMozos } from "./Pages/ListaDeMozos";
import { Nav } from "./Pages/Nav";

function Father () {
    const [estaLogeado, setEstaLogeado] = useState(false)    
    
    return(
        <div>
            <BrowserRouter>
            <Nav estaLogeado={estaLogeado} setEstaLogeado={setEstaLogeado}/>
                <Routes>
                    <Route path="/" element={<App estaLogeado={estaLogeado}/>} />
                    <Route path="/mozos" element={<ListaDeMozos />} />
                    <Route path="/login" element={<LoginMozos setEstaLogeado={setEstaLogeado} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Father;