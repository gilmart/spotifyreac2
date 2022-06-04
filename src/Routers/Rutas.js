import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home.js";
import { Canciones } from "../Canciones/Canciones.js";
import { Menu } from "../Menu/Menu.js";

export function Rutas(){

    return (
        <>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="canciones" element={<Canciones />} />
          </Routes>
        </>
      );
}