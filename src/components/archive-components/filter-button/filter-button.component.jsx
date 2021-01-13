import React from 'react'
import './filter-button.styles.scss'

export default function FilterButton({ children, className = '', ...otherProps }) {
    return (
        <button 
            className={`filter-button__module ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}
