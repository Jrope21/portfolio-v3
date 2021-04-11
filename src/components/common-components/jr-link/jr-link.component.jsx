import React from 'react'
import './jr-link.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'
import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'


// TODO -- Refactor this component into "jr-button", or a seperate component
// should set this component up to only handle link logic (not styling)??
export default function JrLink({
    className = '',
    iconClassName = '',
    href = '',
    to = '',
    enableIcons,
    children,
    isStyled = true,
    ...otherProps
}) {

    

    if(to) return (
        <Link
            className={`${isStyled && `jr-link__module internal-link`} ${className}`}
            to={to} 
            {...otherProps}
        >
            {children}
            {isStyled && 
                <JrPointer
                    enableHoverAnimations={true}
                    className="detail-btn-pointer"
                    size={'small'}
                />
            }
        </Link>
    )

    if(href) return (
        <a 
            className={`${isStyled && `jr-link__module external-link`}  ${className}`}
            href={href} 
            rel="noopener noreferrer" 
            target="_blank"
            {...otherProps}
        >
            {isStyled ? 
                <>
                    <span className="hover:text-underline inner-text">
                        {children}
                    </span>
                    <ExternalLinkIcon className={`external-link-icon ${iconClassName}`} />
                </>
            :
                children  
            }
           
        </a>
    )

    return null;
}
