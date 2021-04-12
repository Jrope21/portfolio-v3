/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it



import CustomLayout from "./wrapPageElement"

export const wrapPageElement = CustomLayout

if (typeof window !== 'undefined') {
    // Makes scroll behavior of internal links smooth
    require('smooth-scroll')('a[href*="#"]');
}

// adjusting default scroll handling (on route change
// => this is to to allow the page transition to work properly

const transitionDelay = 450;

export const shouldUpdateScroll = ({
    routerProps = { location: null },
    prevRouterProps = { location: null },
    getSavedScrollPosition
  }) => {

    let savedPosition = null;
    if(prevRouterProps.location) savedPosition = getSavedScrollPosition(prevRouterProps.location);
    console.log('scroll log (on route update)', getSavedScrollPosition(routerProps.location));

    window.scroll(...(savedPosition || [0, 0]))
    window.setTimeout(() => window.scroll(0, 0) ,transitionDelay)

    return false;
  };


//   export const onInitialClientRender = () => {
//     // dirty fix for missing popstate listener
//     const GATSBY_NAVIGATE = window.___navigate || {}
  
//     window.addEventListener('popstate', () =>
//       GATSBY_NAVIGATE(window.location.pathname, { replace: true })
//     )
//   }