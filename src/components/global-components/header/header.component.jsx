import React, { useEffect, useState, useContext } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'
import { menuItems } from '@config'

export default function Header() {

    const [globalContextData] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const openNav = () => setIsMobileNavOpen(true);
    const closeNav = () => setIsMobileNavOpen(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const changeScrollAt = 155;
        // const changeScrollAt = 500;
        const currentScrollY = Math.abs(currPos.y);
        
        if(currentScrollY > changeScrollAt && !isMobileNavFixed) return setIsMobileNavFixed(true);
        if(currentScrollY < changeScrollAt) setIsMobileNavFixed(false)
    }, [])

    useEffect(() => {
        if(isMobileNavOpen) document.body.classList.add('mobile-no-scroll');
        else document.body.classList.remove('mobile-no-scroll');

        return (()=> {
            document.body.classList.remove('mobile-no-scroll');
        })
    }, [isMobileNavOpen])

    return (
        <header className={`header__module ${isMobileNavFixed ? 'mobile-nav-fixed' : ''} ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <nav>
                <button 
                    className={`mobile-menu-btn ${activeMenuItem}`}
                    onClick={openNav}
                >
                    <div className="inner-wrapper">
                        Menu
                        <span aria-hidden="true" className="line-seperator" />
                        <span 
                            className={`mobile-menu-breadcrumb`}
                        >{activeMenuItem}</span>
                    </div>
                    
                </button>
                <div className="mobile-overlay" onClick={closeNav} />
                <ul className={`navigation`}>
                    {menuItems.map(menuItem => (
                        <li>
                            <div className={`nav-item-outer-wrapper ${activeMenuItem === menuItem ? 'active' : ''}`}>
                                <Link 
                                    to={`/#${menuItem.toLowerCase()}`}
                                    onClick={closeNav}
                                >{menuItem}</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
