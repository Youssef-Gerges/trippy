import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuLinks } from './NavLinks';
import './Navbar.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    const links = menuLinks.map((link, index) => {
        return (
            <li key={index}>
                <Link to={link.url} className={link.cName}>
                    {link.icon ?
                        <FontAwesomeIcon icon={link.icon} />
                        : null
                    }
                    {link.title}
                </Link>
            </li>
        );
    });

    return (
        <nav className='navbar-items'>
            <h1 className="logo">Trippy</h1>
            <div className='menu-icons'>
                <FontAwesomeIcon icon={!toggle ? faBars : faTimes} onClick={() => setToggle(!toggle)} />
            </div>
            <ul className={`nav-menu ${toggle == true ? 'showed' : 'hidden'}`}>
                {links}
                <Link to={"/signup"}><button>Sign Up</button></Link>
            </ul>
        </nav>
    )
}
