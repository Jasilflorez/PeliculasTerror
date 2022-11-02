 import React from "react";
 import "./verpeli.css"
 import {Videos} from './Videos'
const Verpeli = ({children, estado,cambiarEstado}) => {
return (

    <>
        {estado &&(
            <div className="VerPelicula">
        <div className="Pelicula">  
        <>
        <button className="salir" onClick={()=> cambiarEstado(false)}>X</button>
        </>
        <Videos/>
        {children}
        </div>
        </div>
        )}
    </>  
)
}
export default Verpeli;
