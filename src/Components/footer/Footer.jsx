import './Footer.css'
import { Section } from './Section';
import pelicula1 from '../imagenes/pelicula1.jpg'
import pelicula2 from '../imagenes/pelicula2.jpg'
import pelicula3 from '../imagenes/pelicula3.jpg'
import pelicula4 from '../imagenes/pelicula4.jpg'
import pelicula5 from '../imagenes/pelicula5.jpg'
import pelicula6 from '../imagenes/pelicula6.jpg'
import pelicula7 from '../imagenes/pelicula7_a.jpg'
import pelicula8 from '../imagenes/pelicula8.jpg'

export const Footer = () => {
return (
    <footer className='TD-Footer'>
        <Section peli2={pelicula1}/>
        <Section peli2={pelicula2}/>
        <Section peli2={pelicula3}/>
        <Section peli2={pelicula4}/>
        <Section peli2={pelicula5}/>
        <Section peli2={pelicula6}/>
        <Section peli2={pelicula7}/>
        <Section peli2={pelicula8}/>
    </footer>
)
}
