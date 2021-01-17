import React from 'react'
import './jr-pointer.styles.scss'

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