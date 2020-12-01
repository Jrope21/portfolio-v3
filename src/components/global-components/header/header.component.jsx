import React, { useEffect, useState, useContext, useRef } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'

const menuItems = ['Home', 'Experience', 'Projects', 'About', 'Contact'];

export default function Header() {

    const [globalContextData] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

    // const [mobileNavWidth, setMobileNavWidth]
    // const activeMobileMenuText = useRef(null);

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

    const openNav = () => setIsMobileNavOpen(true);
    const closeNav = () => setIsMobileNavOpen(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const changeScrollAt = 130;
        const currentScrollY = Math.abs(currPos.y);
        
        if(currentScrollY > changeScrollAt && !isMobileNavFixed) return setIsMobileNavFixed(true);
        if(currentScrollY < changeScrollAt) setIsMobileNavFixed(false)
    }, [])

    // useEffect(() => {
    //     active
    // }, [activeMenuItem])

    return (
        <header className={`header__module ${isMobileNavFixed ? 'mobile-nav-fixed' : ''} ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <nav>
                <button 
                    // ref={mobileNavButton}
                    className={`mobile-menu-btn ${activeMenuItem}`}
                    onClick={openNav}
                >
                    <div className="inner-wrapper">
                        Menu
                        <span aria-hidden="true" className="line-seperator" />
                        {/* {menuItems.map(menuItem => (
                            <span 
                                className={`mobile-menu-breadcrumb ${menuItem === activeMenuItem ? 'active-section' : ''}`}
                            >{activeMenuItem}</span>
                        ))} */}
                        <span 
                            // ref={activeMobileMenuText}
                            className={`mobile-menu-breadcrumb`}
                        >{activeMenuItem}</span>
                    </div>
                    
                </button>
                <div className="mobile-overlay" onClick={closeNav} />
                <ul className={`navigation`}>
                    <li>
                        <div className={`nav-item-outer-wrapper ${activeMenuItem === 'Home' ? 'active' : ''}`}>
                            <Link 
                                to="/#top-of-page"
                                onClick={closeNav}
                            >Home</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`nav-item-outer-wrapper ${activeMenuItem === 'Experience' ? 'active' : ''}`}>
                            <Link 
                                to="/#section-number-1"
                                onClick={closeNav}
                            >Experience</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`nav-item-outer-wrapper ${activeMenuItem === 'Projects' ? 'active' : ''}`}>
                            <Link 
                                to="/#section-number-2"
                                onClick={closeNav}
                            >Projects</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`nav-item-outer-wrapper ${activeMenuItem === 'About' ? 'active' : ''}`}>
                            <Link 
                                to="/#section-number-3"
                                onClick={closeNav}
                            >About</Link>
                        </div>
                    </li>
                    <li>
                        <div className={`nav-item-outer-wrapper ${activeMenuItem === 'Contact' ? 'active' : ''}`}>
                            <Link 
                                to="/#section-number-4"
                                onClick={closeNav}
                            >Contact</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
