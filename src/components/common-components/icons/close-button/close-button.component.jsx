import React from 'react'
import './close-button.styles.scss'

export default function CloseButton({ className = '', iconClassName = '', ...otherProps }) {
    return (
        <button className={`close-button__module hover:btn-shadow ${className}`} {...otherProps}>
            <span className="sr-only">This is a close button</span>
            <svg 
                className={`close-button-icon ${iconClassName}`}
                width="100" 
                height="100" 
                viewBox="0 0 100 100" 
                fill="#E5E5E5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M100 10.0714L89.9286 0L50 39.9286L10.0714 0L0 10.0714L39.9286 50L0 89.9286L10.0714 100L50 60.0714L89.9286 100L100 89.9286L60.0714 50L100 10.0714Z" />
            </svg>
        </button>
    )
}
