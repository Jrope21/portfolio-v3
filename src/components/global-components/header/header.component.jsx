import React, { useEffect, useState, useContext } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { useIsMounted } from '@hooks/useIsMounted'
import { useIsBodyScrollable } from '@hooks/useIsBodyScrollable'

import { GlobalContext } from '@global-components/global.context'
import useNavigationItems from '../../../hooks/useNavigationItems';

export default function Header({ currentPath = '/' }) {

    const [navItems, setNavItems] = useNavigationItems();

    const [ globalContextData ] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

    const [isMounted] = useIsMounted();
    const [isBodyScrollable, setIsBodyScrollable] = useIsBodyScrollable(true);

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileMenuBtnSwapping, setIsMobileMenuBtnSwapping] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const isProjectPage = currentPath && currentPath !== '/' ? true : false
    
    const openNav = () => setIsMobileNavOpen(true);
    const closeNav = () => setIsMobileNavOpen(false);

    useScrollPosition(({ prevPos, currPos }) => { // setup fixed nav swap
        const changeScrollAt = 450;
        const currentScrollY = Math.abs(currPos.y);
        
        if(currentScrollY > changeScrollAt && !isMobileNavFixed) setIsMobileNavFixed(true);
        if(currentScrollY < changeScrollAt) setIsMobileNavFixed(false)
    }, [])

    useEffect(() => { // no body scroll when mobile nav is open
        setIsBodyScrollable(!isMobileNavOpen);
    }, [isMobileNavOpen])

    useEffect(() => { // delay animations while mobile nav is swapping
        if(!isMobileNavFixed && isMounted) {
            setIsMobileMenuBtnSwapping(true)
            setTimeout(() => {
                setIsMobileMenuBtnSwapping(false);
            }, 250)
        }
    }, [isMobileNavFixed])
    

    if(currentPath) return (
        <header 
            className={`
                header__module 
                ${isMobileMenuBtnSwapping ? 'mobile-menu-swapping' : ''}
                ${isMobileNavFixed ? 'mobile-nav-fixed' : ''}
                ${isMobileNavOpen ? 'mobile-nav-open' : ''}
            `}
        >
            <nav>
                <button 
                    className={`
                        mobile-menu-btn
                        stationary
                        ${isProjectPage ? 'Projects' : 'Home'}
                    `}
                    onClick={openNav}
                >
                    <div className="inner-wrapper">
                        Menu
                        <span aria-hidden="true" className="line-seperator" />
                        <span 
                            className={`mobile-menu-breadcrumb`}
                        >
                            {isProjectPage ? 'Projects' : 'Home'}
                        </span>
                    </div>
                    
                </button>

                <div className="mobile-menu-btn-scrollable-wrapper">
                    <button 
                        className={`
                            mobile-menu-btn
                            scrollable
                            ${isProjectPage ? 'Projects' : ''}
                            ${!isProjectPage ? activeMenuItem.name : ''}
                        `}
                        onClick={openNav}
                    >
                        <div className="inner-wrapper">
                            Menu
                            <span aria-hidden="true" className="line-seperator" />
                            <span 
                                className={`mobile-menu-breadcrumb`}
                            >
                                {isProjectPage ? 'Projects' : activeMenuItem.name}
                            </span>
                        </div>
                        
                    </button>
                </div>

                <div className="mobile-overlay" onClick={closeNav} />

                <div className="navigation-overflow-wrapper stationary">
                    <ul className={`navigation stationary`}>
                        {navItems.map(({ name, path, children }, i) => (
                            <li 
                                key={name + 'nav-link stationary'}
                                className={`
                                    ${!isProjectPage && name === 'Home' && currentPath === '/' ? 'active-stationary' : ''}
                                    ${isProjectPage && name === 'Projects' ? 'active-stationary active' : ''}
                                    ${!isProjectPage && activeMenuItem.name === name ? 'active' : ''}
                                `}
                            >

                                <div className={`nav-item-outer-wrapper`}>

                                    <Link 
                                        to={path === '/' ? '/#' : path}
                                        onClick={closeNav}
                                    >
                                        {name}
                                        <span className="number">{`0${i}.`}</span>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navigation-overflow-wrapper scrollable">
                    <ul className={`navigation scrollable`}>
                        {navItems.map(({ name, path, children }, i) => (
                            <li 
                                key={name + i + 'nav-link'}
                                className={`
                                    ${!isProjectPage && name === 'Home' && currentPath === '/' ? 'active-stationary' : ''}
                                    ${isProjectPage && name === 'Projects' ? 'active-stationary active' : ''}
                                    ${!isProjectPage && activeMenuItem.name === name ? 'active' : ''}
                                `}
                            >
                                <div className={`nav-item-outer-wrapper`}>
                                    <Link 
                                        to={path === '/' ? '/#' : path}
                                        onClick={closeNav}
                                    >
                                        <span className="number">{`0${i}.`}</span>
                                        {name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
              
            </nav>
        </header>
    )
    return null;
}
