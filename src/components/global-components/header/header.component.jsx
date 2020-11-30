import React, { useEffect, useState, useContext } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'


export default function Header() {

    const [globalContextData] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

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

    return (
        <header className={`header__module ${isMobileNavFixed ? 'mobile-nav-fixed' : ''} ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <nav>
                <button 
                    className="mobile-menu-btn"
                    onClick={openNav}
                >
                    Menu
                    <span className={`active-section`}>{activeMenuItem}</span>
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
