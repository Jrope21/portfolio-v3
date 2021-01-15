import React from 'react'
import './jr-button.styles.scss'

import { Link } from 'gatsby'

import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'

export default function JrButton({
    urlPath,
    text,
    hasArrow = true,
    className = '',
    ...otherProps
}) {

    if (urlPath && text) return (
        <Link 
            className={`jr-button__module ${className}`}
            to={urlPath}
            {...otherProps}
        >
            <span className="text">
               {text}
            </span>
            {hasArrow && 
                <JrPointer
                    altColor={true}
                    size={'small'}
                    enableHoverAnimations={true}
                />
            }
        </Link>
    )

    if(text) return (
        <button 
            className="jr-button__module"
            {...otherProps}
        >
            <span className="text">
               {text}
            </span>
            {hasArrow && 
                <JrPointer
                    altColor={true}
                    size={'small'}
                    
                />
            }
        </button>
    )

    return null;
}
