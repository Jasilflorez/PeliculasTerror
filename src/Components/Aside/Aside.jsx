import './Aside.css'
import { ButtoAside } from './ButtoAside';
import { SiWindowsxp } from "react-icons/si";
import { BsHouseDoorFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { BsTwitch } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { ButtoAside2 } from './ButtonAside2';

export const Aside = () => {
return (
    <aside className='TD-Aside'>
        <ButtoAside inco={BsHouseDoorFill}/>
        <ButtoAside inco={AiTwotoneLike}/>
        <ButtoAside inco={SiWindowsxp}/>
        <ButtoAside inco={BsTwitch}/>
        <div className='ButtoAside2'>
        <ButtoAside2 inco2={FaShareAlt}/>
        <ButtoAside2 inco2={AiFillSetting}/>
        </div>
    </aside>
)
}
