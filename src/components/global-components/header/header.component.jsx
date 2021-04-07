import React, { useEffect, useState, useContext } from 'react'
import './header.styles.scss'

import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from "gatsby"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { useIsMounted } from '@hooks/useIsMounted'
import { useIsBodyScrollable } from '@hooks/useIsBodyScrollable'

import { GlobalContext } from '@global-components/global.context'
import { menuItems } from '@config'

export default function Header({ currentPath = '/' }) {

    const { allNavigationJson } = useStaticQuery(graphql`
        query MyQuery {
            allNavigationJson {
                nodes {
                    links {
                        name
                        path
                        children {
                            name
                            path
                        }
                    }          
                }
            }
        }
    `)

    const navItems = allNavigationJson.nodes[0].links
    console.log('nav items', navItems);

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
                        {navItems.map(({ name, path, children }, i) => (
                            <li 
                                key={name + 'nav-link stationary'}
                                className={classNames({
                                    'active-stationary': !isProjectPage && name === 'Home' && currentPath === '/',
                                    'active-stationary active': isProjectPage && name === 'Projects',
                                    'active': !isProjectPage && activeMenuItem === name
                                })}
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
                                className={classNames({
                                    'active-stationary': !isProjectPage && name === 'Home' && currentPath === '/',
                                    'active-stationary active': isProjectPage && name === 'Projects',
                                    'active': (!isProjectPage && activeMenuItem === name && activeMenuItem !== 'Home' ) || (activeMenuItem === 'Home' && name === 'Experience'),
                                })}
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
