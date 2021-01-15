import React from 'react'

import JrLink from '../../../common-components/content-page-hero-titles/node_modules/@common-components/jr-link/jr-link.component'

export default function ContactModal({
    title,
    description,
    flagText,
    buttonText
}) {
    return (
        <div className="contact-modal__module">
            <div className="contact-modal-left">

            </div>
            <div className="contact-modal-right">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>

                <div className="bottom-button">
                    <p className="flag-text">{flagText}</p>
                    <JrLink href="a">
                        {buttonText}
                    </JrLink>
                </div>
            </div>
        </div>
    )
}
