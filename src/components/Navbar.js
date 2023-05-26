import React, { useState } from 'react'
import Logo from '../assets/Aquilombarse.png'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt='logo'/>
            <div className='hiddenLinks'>
                <Link to="/"> Início </Link>
                <Link to="/forum"> Forum </Link>
                <Link to="/sobre"> Sobre </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Início </Link>
            <Link to="/forum"> Forum </Link>
            <Link to="/sobre"> Sobre </Link>
            <button onClick={toggleNavbar}></button>
        </div>
    </div>
  )
}

export default Navbar
