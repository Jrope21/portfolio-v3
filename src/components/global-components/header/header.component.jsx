import React, { useEffect, useState, useContext } from 'react'
import './header.styles.scss'

import classNames from 'classnames';
import { Link } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { useIsMounted } from '@hooks/useIsMounted'
import { useIsBodyScrollable } from '@hooks/useIsBodyScrollable'

import { GlobalContext } from '@global-components/global.context'
import { menuItems } from '@config'

export default function Header({ path = '/' }) {

    const [ globalContextData ] = useContext(GlobalContext)
    const { activeMenuItem } = globalContextData;

    const [isMounted] = useIsMounted();
    const [isBodyScrollable, setIsBodyScrollable] = useIsBodyScrollable(true);

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileMenuBtnSwapping, setIsMobileMenuBtnSwapping] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const isProjectPage = path && path !== '/' ? true : false
    
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
    

    if(path) return (
        <header 
            className={classNames('header__module', {
                'mobile-menu-swapping': isMobileMenuBtnSwapping,
                'mobile-nav-fixed': isMobileNavFixed,
                'mobile-nav-open': isMobileNavOpen
            })}
        >
            <nav>
                <button 
                    className={classNames(`mobile-menu-btn`, `stationary`, {
                        'Projects': isProjectPage,
                        'Home': !isProjectPage
                    })}
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
                        className={classNames(`mobile-menu-btn`, `scrollable`, {
                            'Projects': isProjectPage,
                            [activeMenuItem]: !isProjectPage
                        })}
                        onClick={openNav}
                    >
                        <div className="inner-wrapper">
                            Menu
                            <span aria-hidden="true" className="line-seperator" />
                            <span 
                                className={`mobile-menu-breadcrumb`}
                            >
                                {isProjectPage ? 'Projects' : activeMenuItem}
                            </span>
                        </div>
                        
                    </button>
                </div>

                <div className="mobile-overlay" onClick={closeNav} />

                <div className="navigation-overflow-wrapper stationary">
                    <ul className={`navigation stationary`}>
                        {menuItems.map((menuItem, i) => (
                            <li 
                                key={menuItem + 'nav-link stationary'}
                                className={classNames({
                                    'active-stationary': !isProjectPage && menuItem === 'Home' && path === '/',
                                    'active-stationary active': isProjectPage && menuItem === 'Projects',
                                    'active': !isProjectPage && activeMenuItem === menuItem
                                })}
                            >

                                <div className={`nav-item-outer-wrapper`}>

                                    <Link 
                                        to={`/#${menuItem.toLowerCase()}`}
                                        onClick={closeNav}
                                    >
                                        {menuItem}
                                        <span className="number">{`0${i}.`}</span>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navigation-overflow-wrapper scrollable">
                    <ul className={`navigation scrollable`}>
                        {menuItems.map((menuItem, i) => (
                            <li 
                                key={menuItem + i + 'nav-link'}
                                className={classNames({
                                    'active-stationary': !isProjectPage && menuItem === 'Home' && path === '/',
                                    'active-stationary active': isProjectPage && menuItem === 'Projects',
                                    'active': (!isProjectPage && activeMenuItem === menuItem && activeMenuItem !== 'Home' ) || (activeMenuItem === 'Home' && menuItem === 'Experience'),
                                })}
                            >
                                <div className={`nav-item-outer-wrapper`}>
                                    <Link 
                                        to={`/#${menuItem.toLowerCase()}`}
                                        onClick={closeNav}
                                    >
                                        <span className="number">{`0${i}.`}</span>
                                        {menuItem}
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
