import React from 'react'
import './jr-link.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from './external-link-icon/external-link-icon.component'
import JrPointer from '@common-components/jr-pointer/jr-pointer.component'

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
        >
            {children}
            <ExternalLinkIcon className={iconClassName} />
        </a>
    )

    return null;
}
