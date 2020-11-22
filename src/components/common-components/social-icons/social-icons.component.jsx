import React from 'react';
import './social-icons.styles.scss'

import LinkedInIcon from '@images/socials/linked-in-icon.svg'

export default function SocialIcons({ className }) {
    return (
        <ul className={`social-icons__module${className ? ` ${className}` : ''}`}>
            <li>
                <img src={LinkedInIcon} alt="Linked In Icon for Joshua Roper"/>
            </li>
            <li>
                <img src={LinkedInIcon} alt="Linked In Icon for Joshua Roper"/>
            </li>
            <li>
                <img src={LinkedInIcon} alt="Linked In Icon for Joshua Roper"/>
            </li>
        </ul>
    )
}
