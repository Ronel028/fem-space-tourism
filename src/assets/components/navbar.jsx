import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import Logo from '../images/shared/logo.svg';
import HamburgerIcon from '../images/shared/icon-hamburger.svg'
import CloseMenu from '../images/shared/icon-close.svg'


function Navbar(){

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true)
    const [active, setActive] = useState({
        home: true,
        destination: false,
        crew: false,
        technology: false
    })

    function handleClick(event){
        const { name } = event.target;
        
        if(name === 'home'){
            setActive(function(current){
                return {
                    ...current,
                    home: true,
                    destination: false,
                    crew: false,
                    tech: false
                }
            })
            navigate('/')
        }
        else if(name === 'destination'){
            setActive(function(current){
                return {
                    ...current,
                    home: false,
                    destination: true,
                    crew: false,
                    tech: false
                }
            })
            navigate('/destination')
        }
        else if(name === 'crew'){
            setActive(function(current){
                return {
                    ...current,
                    home: false,
                    destination: false,
                    crew: true,
                    tech: false
                }
            })
            navigate('/crew')
        }
        else if(name === 'technology'){
            setActive(function(current){
                return {
                    ...current,
                    home: false,
                    destination: false,
                    crew: false,
                    tech: true
                }
            })
            navigate('/technology')
        }
    }

    // menu button
    function toggleMenu(event){
        const { name } = event.target;

        if(name === 'open'){
            setToggle(false)
        }else{
            setToggle(true)
        }

    }

    return(
        <nav className="nav-bar">

            <div className="logo">
                <img src={Logo} alt="Space tourism" />
            </div>
            
            {/* icon */}
            <div className="menu-icon">
                <img 
                    className={toggle ? '' : 'display'}
                    src={HamburgerIcon} 
                    alt="Menu icon" 
                    name='open'
                    onClick={toggleMenu}
                />
                <img 
                    className={toggle ? 'display' : ''}
                    src={CloseMenu} 
                    alt="Close icon" 
                    name='close'
                    onClick={toggleMenu}
                />
            </div>

            <div className={toggle ? 'links' : 'links d-flex'}>
                <ul>

                    <li
                        className={active.home ? 'active' : ''}
                    >
                        <a
                            name='home'
                            onClick={handleClick}
                        >
                            <span>00</span>
                            HOME
                        </a>
                    </li>

                    <li
                        className={active.destination ? 'active' : ''}
                    >
                        <a
                            name='destination'
                            onClick={handleClick}
                        >
                            <span>01</span>
                            DESTINATION
                        </a>
                    </li>

                    <li
                        className={active.crew ? 'active' : ''}
                    >
                        <a
                            name='crew'
                            onClick={handleClick}
                        >
                            <span>02</span>
                            CREW
                        </a>
                    </li>

                    <li
                        className={active.tech ? 'active' : ''}
                    >
                        <a
                            name='technology'
                            onClick={handleClick}
                        >
                            <span>03</span>
                            TECHNOLOGY
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    )

}

export default Navbar;