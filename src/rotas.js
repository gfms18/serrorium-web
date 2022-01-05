import React from "react";
import { Routes, Route } from "react-router-dom";

import Div1login from "./login";
import Loginadm from "./loginadministrador";
import TelaCadastro from "./componentes/tela-cadastro";
const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Div1login />}></Route>
            <Route path="/loginadministrador" element={<Loginadm/>}></Route>
            <Route path="/tela-cadastro" element={<TelaCadastro/>}></Route>
            
            
        </Routes>
    )
}

export default Rotas;
