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

// turning off scroll position 
// => allowing "PageTransition" component to control this

// const transitionDelay = 450;

// TODO -- maybe maintain saved scroll positions after animations?? 
// => after hitting the "back" button user should end up at previous location??
// export const shouldUpdateScroll = () => {
//     // window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//     return false;
// };

const transitionDelay = 450;

export const onRouteUpdate = ({ location, prevLocation }) => {
    // window.body.focus();
    console.log("new pathname", location)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  }

  export const shouldUpdateScroll = () => false;

// export const shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition
//   }) => {
//     // document.body.classList.add('body-lock');
//     // if(location === 'yooo') window.scroll(0, 0)
//     // window.setTimeout(() => {
//     //     // document.body.classList.remove('body-lock');
//     //     window.scrollTo(0, 0)
//     // }, transitionDelay);
//     console.log('location action', location.action);
//     // if (location.action === "PUSH") {
//     //   window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//     // } else {
//     //   const savedPosition = getSavedScrollPosition(location);
//     //   window.setTimeout(
//     //     () => window.scrollTo(...(savedPosition || [0, 0])),
//     //     transitionDelay
//     //   );
//     // }
//     return false;
//   };

//   export const onInitialClientRender = () => {
//     // dirty fix for missing popstate listener
//     const GATSBY_NAVIGATE = window.___navigate || {}
  
//     window.addEventListener('popstate', () =>
//       GATSBY_NAVIGATE(window.location.pathname, { replace: true })
//     )
//   }