import React from 'react'
import './jr-pointer.styles.scss'

// export default function JrPointer({ 
//     size = 'standard', // sizes include: small, medium, standard
//     altColor = false, 
//     className 
// }) {
//     return (
//         <span 
//             className={`jr-pointer__module ${size} ${className ? className : ''}${altColor ? ` alt-color` : ''}`}
//         >
//             <span className="middle-line"></span>
//         </span>
//     )
// }


// export default function JrPointer({ 
//     size = 'standard', // sizes include: small, medium, standard
//     altColor = false, 
//     className 
// }) {
//     return (
//         <svg className="jr-pointer__module" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
//              viewBox="0 0 492.004 492.004" >
//         <g>
//             <g>
//                 <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
//                     c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
//                     v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
//                     c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
//                     l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/>
//             </g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         <g>
//         </g>
//         </svg>
//     )
// }


export default function JrPointer({ 
    size = 'standard', // sizes include: small, medium, standard
    altColor = false, 
    className,
    enableHoverAnimations = false
}) {
    return (
        <svg 
            className={`
                jr-pointer__module 
                ${className} 
                ${size} 
                ${altColor ? 'alt-color' : ''}
                ${enableHoverAnimations ? 'enable-hover-animations' : ''}
            `} 
            width="99" 
            height="99" 
            viewBox="0 0 99 99" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M49.4999 0.499969L40.8636 9.13622L75.0411 43.375H0.499878V55.625H75.0411L40.8636 89.8637L49.4999 98.5L98.4999 49.5L49.4999 0.499969Z" />
        </svg>
        
    )
}