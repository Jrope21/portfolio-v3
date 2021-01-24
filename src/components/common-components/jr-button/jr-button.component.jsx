import React from 'react'
import './jr-button.styles.scss'

import { Link } from 'gatsby'
import classNames from 'classnames'

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
            className={classNames(`jr-button__module`, {
                [className]: className,
                [btnStyle]: btnStyle,
                'hover:bg-change hover:_bg-accent': btnStyle === 'large' 
            })}
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
            className={classNames(`jr-button__module hoverable`, {
                [className]: className,
                [btnStyle]: btnStyle,
            })}
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
