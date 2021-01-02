import React, { useEffect, useState, useContext, useRef } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'
import { menuItems } from '@config'

export default function Header() {

    const [globalContextData] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

    const isFirstMount = useRef(true);

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileMenuBtnSwapping, setIsMobileMenuBtnSwapping] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const openNav = () => setIsMobileNavOpen(true);
    const closeNav = () => setIsMobileNavOpen(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const changeScrollAt = 450;
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

    useEffect(() => {
        console.log('fixed hook', isFirstMount)
        if(!isMobileNavFixed) {
            setIsMobileMenuBtnSwapping(true)
            setTimeout(() => {
                setIsMobileMenuBtnSwapping(false);
            }, 250)
        }
    }, [isMobileNavFixed])

    // useEffect(() => {
    //     console.log('first mount', isFirstMount)
    //     isFirstMount.current = false;
    //     console.log('second mount', isFirstMount)
    // }, [])

    return (
        <header className={`header__module ${isMobileMenuBtnSwapping ? 'mobile-menu-swapping' : ''} ${isMobileNavFixed ? 'mobile-nav-fixed' : ''} ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <nav>
                <button 
                    className={`mobile-menu-btn stationary ${activeMenuItem}`}
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

                <button 
                    className={`mobile-menu-btn scrollable ${activeMenuItem}`}
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
                    {menuItems.map((menuItem, i) => (
                        <li key={menuItem + i + 'nav-link'}>
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
