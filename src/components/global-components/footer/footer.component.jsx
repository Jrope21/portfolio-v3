import React from 'react'
import './footer.styles.scss'

import SocialIcons from '@common-components/social-icons/social-icons.component'

export default function Footer() {
    return (
        <footer className="footer__module container">
            <SocialIcons iconClassName={'footer-social-icon'} />
            <a href="josh-resume.pdf" download className="download-btn">
                Download Resume
            </a>
            <p className="copyright">&copy;{new Date().getFullYear()} Joshua Roper Development</p>
        </footer>
    )
}
