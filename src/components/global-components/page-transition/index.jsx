import React, { useEffect, useState } from "react"
import './styles.scss'

export default function PageTransition({ location, children, ...otherProps }) {

    const [isPageTransitioning, setIsPageTransitioning] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [content, setContent] = useState(children);
    const [previousChildren, setPreviousChildren] = useState(children);
    // console.log('location from page transition', location)
    

    useEffect(() => {
        let isMounted = true;
        let isFirstMount = isFirstLoad;
        setIsFirstLoad(false);
      let currentLocation = location;

    //   let isUrlHashed = location.hash;
        if (!isFirstMount) setIsPageTransitioning(true)
      
        if (!isFirstMount) setTimeout(() => {

        // if(currentLocation.pathname !== location.pathname) {
            if(isMounted) setIsPageTransitioning(false)
            // console.log('timeout has ran');
            if(isMounted) setContent(children)
            // if(isMounted) window.scrollTo(0, 0);
        // }

      }, 450)

      return () => {
        //   setContent(children)
        isMounted = false;
      }
    }, [location.pathname])

    return (
        <div className={`page-transition__module ${isPageTransitioning ? 'hide' : ''}`} {...otherProps}>
            {content}
            {/* {children} */}
            {/* {isPageTransitioning ?
                previousChildren
            :
                children
            } */}
        </div>   
    )
}
