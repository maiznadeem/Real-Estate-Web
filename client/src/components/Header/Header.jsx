import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

import './Header.css'
import useHeaderColor from '../../hooks/useHeaderColor'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const headerColor = useHeaderColor();

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }

    return (
        <section className="h-wrapper" style={{ background: headerColor }}>
            <div className="h-container flexCenter paddings innerWidth">
                <img src="./logo.png" alt="Logo" width={100} />
                <OutsideClickHandler
                    onOutsideClick={() => {setMenuOpened(false)}}
                >
                    <div 
                        className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
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