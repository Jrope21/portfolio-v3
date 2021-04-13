import React, { useContext, useEffect, useState } from "react"
import { PageTransitionContext } from "@context/page-transition";
// import { GlobalContext } from "../global.context";
import './styles.scss'

export default function PageTransition({ location, children, ...otherProps }) {

    const [pageTransitionContext, setPageTransitionContext] = useContext(PageTransitionContext);
    const { isPageTransitioning } = pageTransitionContext;

    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [content, setContent] = useState(children);
    

    useEffect(() => {
        let isMounted = true;
        let isFirstMount = isFirstLoad;
        setIsFirstLoad(false);
        
        if (!isFirstMount) {
            setPageTransitionContext({
                ...pageTransitionContext,
                isPageTransitioning: true,
            })
        }

        if (!isFirstMount) setTimeout(() => { // swap content when animation hides view
            if(isMounted) setContent(children)
        }, 650)
        
        if (!isFirstMount) setTimeout(() => { // kill animation after content swap / load bar is complete
            if(isMounted) {
                setPageTransitionContext({
                    ...pageTransitionContext,
                    isPageTransitioning: false,
                })
            } 
        }, 700)
      

        return () => {
            isMounted = false;
        }
    }, [location.pathname])

    return (
        <div>  
            <div className={`page-load-bar ${isPageTransitioning ? 'is-loading' : ''}`} aria-hidden="true"/>
            <div className={`page-transition__module ${isPageTransitioning ? 'hide' : ''}`} {...otherProps}>
                {content} {console.log('transition context', pageTransitionContext)}
            </div>   
        </div>
    )
}
