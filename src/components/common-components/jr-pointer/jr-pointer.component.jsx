import React from 'react'
import './jr-pointer.styles.scss'

export default function JrPointer({ size = 'standard', className, ...otherProps }) {
    return (
        <span 
            className={`jr-pointer__module ${size} ${className ? className : ''}`}
        >
            <span className="middle-line"></span>
        </span>
    )
}
