import React from 'react'
import './footer.styles.scss'

import SocialIcons from '@common-components/social-icons/social-icons.component'

export default function Footer() {
    return (
        <footer className="footer__module container">
            <SocialIcons />
            <p className="copyright">&copy;{new Date().getFullYear()} Joshua Roper Development</p>
        </footer>
    )
}
