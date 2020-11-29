import React, { useEffect, useState } from 'react'
import './header.styles.scss'

import { Link } from "gatsby"

let scrollPos;
function throttleScrollEvent(callback, wait){ // throttle a scroll event function by specified wait time && only if the browser is ready for repaint
    let scrolling = false;
    
    window.addEventListener('scroll', () => {
        scrolling = true;
    })

    setInterval( function() {
        if ( scrolling ) {
        window.requestAnimationFrame(function() {
            scrollPos = window.pageYOffset;
            scrolling = false;
            callback(scrollPos);
        })
        }
    }, wait );
    
}

export default function Header() {

    const [isMobileNavFixed, setIsMobileNavFixed] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

    const openNav = () => setIsMobileNavOpen(true);
    const closeNav = () => setIsMobileNavOpen(false);

    useEffect(() => {
        // TODO -- need to turn this into a hook
        
        function setFixedMobileNavOnScroll(scrollPos) {
            const changeScrollAt = 130;
            if(scrollPos > changeScrollAt && !isMobileNavFixed) return setIsMobileNavFixed(true);
            if(scrollPos < changeScrollAt) setIsMobileNavFixed(false)
        }

        throttleScrollEvent(setFixedMobileNavOnScroll, 50);

    }, [])

    return (
        <header className={`header__module ${isMobileNavFixed ? 'mobile-nav-fixed' : ''} ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <nav>
                <button 
                    className="mobile-menu-btn"
                    onClick={openNav}
                >
                    Menu
                    <span className={`active-section`}>Home</span>
                </button>
                <div className="mobile-overlay" onClick={closeNav} />
                <ul className={`navigation`}>
                    <li>
                        <div className="nav-item-outer-wrapper">
                            <Link 
                                to="/#top-of-page"
                                onClick={closeNav}
                            >Home</Link>
                        </div>
                    </li>
                    <li>
                        <div className="nav-item-outer-wrapper active">
                            <Link 
                                to="/#section-number-1"
                                onClick={closeNav}
                            >Experience</Link>
                        </div>
                    </li>
                    <li>
                        <div className="nav-item-outer-wrapper">
                            <Link 
                                to="/#section-number-2"
                                onClick={closeNav}
                            >Projects</Link>
                        </div>
                    </li>
                    <li>
                        <div className="nav-item-outer-wrapper">
                            <Link 
                                to="/#section-number-3"
                                onClick={closeNav}
                            >About</Link>
                        </div>
                    </li>
                    <li>
                        <div className="nav-item-outer-wrapper">
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
