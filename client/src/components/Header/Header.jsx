import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import './Header.css'
import useHeaderColor from '../../hooks/useHeaderColor'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const headerColor = useHeaderColor()
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }

    const handleLoginClick = async () => {
        try {
          await loginWithRedirect();
        } catch (error) {
          console.error('Error during login:', error);
        }
    };

    return (
        <section className="h-wrapper" style={{ background: headerColor }}>
            <div className="h-container flexCenter paddings innerWidth">
                <Link to="/">
                    <img src="./logo.png" alt="Logo" width={100} />
                </Link>
                <OutsideClickHandler
                    onOutsideClick={() => {setMenuOpened(false)}}
                >
                    <div 
                        className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <NavLink to="/properties">Properties</NavLink>
                        <a href="mailto:contact.maiznadeem@gmail.com">Contact Us</a>
                        {
                            !isAuthenticated ?
                            <button className="button" onClick={handleLoginClick} >Login</button>
                            : <div>User Profile</div>                            
                        }
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)} >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header