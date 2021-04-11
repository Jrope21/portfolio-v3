import React, { useEffect, useState } from "react"
import './styles.scss'

export default function PageTransition({ location, children }) {

    const [isPageTransitioning, setIsPageTransitioning] = useState(false);
    const [content, setContent] = useState(children);
  
    console.log('location from page transition', location)

    useEffect(() => {
        let currentLocation = location;
        let isUrlHashed = location.hash;
        let isTimePassed = false; 

        setIsPageTransitioning(true)
        
        setTimeout(() => {
            isTimePassed = true;
            // if(currentLocation.pathname === location.pathname) {
                setIsPageTransitioning(false)
                setContent(children)
                if(!isUrlHashed) window.scrollTo(0, 0);
            // }
        }, 500)

        // if(isTimePassed) {
        //     setIsPageTransitioning(false)
        //     setContent(children)
        //     if(!isUrlHashed) window.scrollTo(0, 0);
        // }
    }, [location.pathname])

    return (
        <div className={`page-transition__module ${isPageTransitioning ? 'hide' : ''}`}>
            {content}
        </div>   
    )
}
