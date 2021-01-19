import React from 'react'
import './jr-button.styles.scss'

import { Link } from 'gatsby'

import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'

export default function JrButton({
    urlPath,
    children,
    hasArrow = true,
    className = '',
    btnStyle = 'large', // standard, external-link, large
    ...otherProps
}) {

    if (urlPath && children) return (
        <Link 
            className={`jr-button__module ${className} ${btnStyle}`}
            to={urlPath}
            {...otherProps}
        >
            <span className="text">
               {children}
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

    if(children) return (
        <button 
            className={`jr-button__module ${btnStyle} ${className} hoverable`}
            {...otherProps}
        >
            <span className="text">
               {children}
            </span>
            {hasArrow || btnStyle === "standard" ?
                <JrPointer
                    className="detail-btn-pointer"
                    enableHoverAnimations={true}
                    altColor={btnStyle === 'large' ? true : false}
                    size={'small'} 
                />
            : null}
        </button>
    )

    return null;
}
