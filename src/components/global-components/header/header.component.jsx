import React, { useEffect, useState } from 'react'
import './header.styles.scss'

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

    useEffect(() => {
        // TODO -- need to turn this into a hook
        
        
        function setFixedMobileNavOnScroll(scrollPos) {
            console.log(scrollPos, isMobileNavFixed)
            if(scrollPos > 30 && !isMobileNavFixed) return setIsMobileNavFixed(true);
            if(isMobileNavFixed && scrollPos < 30) setIsMobileNavFixed(false)
        }

        throttleScrollEvent(setFixedMobileNavOnScroll, 50);

    }, [])

    return (
        <header className={`header__module ${isMobileNavFixed ? 'mobile-nav-fixed' : ''}`}>
            <nav>
                <button className="mobile-menu-btn">
                    Menu
                    <span className="active-section">Home</span>
                </button>
                <ul className="navigation">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Experience</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
