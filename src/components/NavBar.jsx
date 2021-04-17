import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLinksData } from '../data/NavLinks.js'

const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <nav>
            <div className="logo">
                <h4>G.A.</h4>
            </div>
            <ul className={navActive ? 'nav-links active' : 'nav-links'}>
                {NavLinksData.map((item, index) => {
                    return <li 
                                key={index} 
                                style={navActive ? {animation: `navLinkFadeIn 1s ease forwards ${index / 7 + 0.1}s`} : {animation: `navLinkFadeOut 0s ease backwards ${(NavLinksData.length - index - 1) / 7}s`}}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                })}
                {/* <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
            </ul>
            <div className="burger" onClick={ () => setNavActive(!navActive)}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
        </nav>
    )
}

export default NavBar