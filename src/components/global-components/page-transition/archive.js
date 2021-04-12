// import React, { useEffect, useState } from "react"
// import './styles.scss'

// export default function PageTransition({ location, children }) {

//     const [isPageTransitioning, setIsPageTransitioning] = useState(false);
//     const [isFirstLoad, setIsFirstLoad] = useState(true);
//     const [content, setContent] = useState(children);
//     const [previousChildren, setPreviousChildren] = useState(children);
//     // console.log('location from page transition', location)

//     useEffect(() => {
//         let isMounted = true;
//         let isFirstMount = isFirstLoad;
//         setIsFirstLoad(false);
//       let currentLocation = location;
//     //   let isUrlHashed = location.hash;
//         if (!isFirstMount) setIsPageTransitioning(true)
      
//         if (!isFirstMount) setTimeout(() => {

//         // if(currentLocation.pathname !== location.pathname) {
//             setIsPageTransitioning(false)

//             if(isMounted) setContent(children)
//             // if(!isUrlHashed) window.scrollTo(0, 0);
//         // }

//       }, 500)

//       return () => {
//         //   setContent(children)
//         isMounted = false;
//       }
//     }, [location.pathname])

//     return (
//         <div className={`page-transition__module ${isPageTransitioning ? 'hide' : ''}`}>
//             {content}
//             {/* {children} */}
//             {/* {isPageTransitioning ?
//                 previousChildren
//             :
//                 children
//             } */}
//         </div>   
//     )
// }
