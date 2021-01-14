import React from 'react'
import './jr-link.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'
import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'

export default function JrLink({
    className = '',
    iconClassName = '',
    href = '',
    to = '',
    enableIcons,
    children,
    ...otherProps
}) {

    if(to) return (
        <Link
            className={`jr-link__module internal-link ${className}`}
            to={to} 
            {...otherProps}
        >
            {children}
            <JrPointer
                enableHoverAnimations={true}
                className="detail-btn-pointer"
                size={'small'}
            />
        </Link>
    )

    if(href) return (
        <a 
            className={`jr-link__module external-link ${className}`}
            href={href} 
            rel="noopener noreferrer" 
            target="_blank"
            {...otherProps}
        >
            <span className="inner-text">
                {children}
            </span>
            <ExternalLinkIcon className={iconClassName} />
        </a>
    )

    return null;
}
