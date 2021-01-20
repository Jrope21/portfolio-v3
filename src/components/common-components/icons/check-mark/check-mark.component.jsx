import React from 'react'
import './check-mark.styles.scss'

export default function CheckMark({ isClickable = false, className = '', ...otherProps }) {

    if(isClickable) return (
        <button className={`check-mark__module is-clickable ${className}`} {...otherProps}>
            <svg 
                width="37" 
                height="29" 
                viewBox="0 0 37 29" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.75 22.7501L2.99999 14.0001L0.0833282 16.9167L11.75 28.5834L36.75 3.58341L33.8333 0.666748L11.75 22.7501Z" fill="#F4AE3F"/>
            </svg>
        </button>
    )

    return (
        <div className={`check-mark__module ${className}`} {...otherProps}>
            <svg 
                width="37" 
                height="29" 
                viewBox="0 0 37 29" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.75 22.7501L2.99999 14.0001L0.0833282 16.9167L11.75 28.5834L36.75 3.58341L33.8333 0.666748L11.75 22.7501Z" fill="#F4AE3F"/>
            </svg>
        </div>
    )
}
