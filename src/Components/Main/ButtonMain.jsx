import { useState } from 'react'
import  Verpeli  from '../Verpelicula/Verpeli';

import'./Main.css'
export const ButtonMain = (props) => {
    const [estado,setEstado]=useState(false);
    const cambiarEstado = ()=>{
        setEstado(!estado);
    }
    
    return (
    <div className='MainButton'>
        <button className='Button-Main' onClick={()=>
        cambiarEstado(!estado)
        } >Ver Peliculas</button>
        <button className='Button-Main'>Ver Trailes</button>

        <Verpeli estado={estado} cambiarEstado={cambiarEstado}>
        </Verpeli>
    </div>
)
}