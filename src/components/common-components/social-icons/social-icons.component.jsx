import React from 'react';
import './social-icons.styles.scss'

import LinkedInIcon from '@images/socials/linked-in-icon.svg'

export default function SocialIcons({ className, iconClassName, ...otherProps }) {
    return (
        <ul className={`social-icons__module${className ? ` ${className}` : ''}`} {...otherProps}>
            <li>
                <img 
                    className={iconClassName}
                    src={LinkedInIcon} 
                    alt="Linked In Icon for Joshua Roper"
                />
            </li>
            <li>
                <img 
                    className={iconClassName}
                    src={LinkedInIcon}
                    alt="Linked In Icon for Joshua Roper"
                />
            </li>
            <li>
                <img 
                    className={iconClassName}
                    src={LinkedInIcon} 
                    alt="Linked In Icon for Joshua Roper"
                />
            </li>
        </ul>
    )
}
