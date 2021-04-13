/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it



import CustomLayout from "./wrapPageElement"
const scrollToElementWhenLoaded = require("./node-lib/helpers/_scroll-to-element-when-loaded");

export const wrapPageElement = CustomLayout

if (typeof window !== 'undefined') {
    // Makes scroll behavior of internal links smooth
    require('smooth-scroll')('a[href*="#"]');
}

const transitionDelay = 650;

// This controls the scroll logic for links that have a hash
// => Gatsby doesn't fire "shouldUpdateScroll" for hashed links :(
export const onRouteUpdate = ({ location, prevLocation }) => {
    if(!location.hash) return null;

    const elementId = location.hash.substring(1); // location.hash without '#'
    
    // wait for page animation & scroll to target (hashed) element
    window.setTimeout(() => {
        if(location.hash === '#top') return window.scroll(0, 0);
        else scrollToElementWhenLoaded({
            elementId: elementId,
            interval: 25,
            maxWaitTime: 150
        })    
     } ,transitionDelay)
}

// this controls all standard navigation scroll logic
// NOTE -- all scroll logic for hashed links are in the "onRouteUpdate" function
export const shouldUpdateScroll = ({
    routerProps = { location: null },
    prevRouterProps = { location: null },
    getSavedScrollPosition
  }) => {
    if(routerProps.location.hash) return false; 

    let savedPosition = null;
    if(prevRouterProps.location) savedPosition = getSavedScrollPosition(prevRouterProps.location);

    window.scroll(...(savedPosition || [0, 0]))
    window.setTimeout(() => {
       window.scroll(0, 0);
    } ,transitionDelay)

    return false;
  };


//   export const onInitialClientRender = () => {
//     // dirty fix for missing popstate listener
//     const GATSBY_NAVIGATE = window.___navigate || {}
  
//     window.addEventListener('popstate', () =>
//       GATSBY_NAVIGATE(window.location.pathname, { replace: true })
//     )
//   }