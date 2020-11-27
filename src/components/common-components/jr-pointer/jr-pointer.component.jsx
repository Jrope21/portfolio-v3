import React from 'react'
import './jr-pointer.styles.scss'

export default function JrPointer({ 
    size = 'standard', // sizes include: small, standard
    altColor = false, 
    className, 
    ...otherProps }) {
    return (
        <span 
            className={`jr-pointer__module ${size} ${className ? className : ''}${altColor ? ` alt-color` : ''}`}
        >
            <span className="middle-line"></span>
        </span>
    )
}
