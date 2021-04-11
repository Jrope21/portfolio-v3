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

// TODO -- maybe maintain saved scroll positions after animations?? 
// => after hitting the "back" button user should end up at previous location??
export const shouldUpdateScroll = () => false;

// export const shouldUpdateScroll = ({
//     routerProps: { location },
// }) => {
//     if(location.hash) return true;
//     return false;
// }