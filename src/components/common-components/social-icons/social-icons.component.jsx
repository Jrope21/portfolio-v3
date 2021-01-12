import React from 'react'
import './social-icons.styles.scss'

import { generateKey } from '../../../helpers/_generate-key'
import { socialsData } from './_data'

export default function SocialIcons({ className, iconClassName, ...otherProps }) {
    return (
        <ul 
            className={`social-icons__module${className ? ` ${className}` : ''}`} 
            {...otherProps}
        >
            {socialsData.map(({ href, icon, alt }, i) => (
                <li key={generateKey(alt)}>
                    <a 
                        href={href} 
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                        <img 
                            className={iconClassName}
                            src={icon} 
                            alt={alt}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
