import React from 'react'
import './contact-modal.styles.scss'

// import JrLink from '@common-components/jr-link/jr-link.component'
import JrButton from '@common-components/jr-button/jr-button.component'

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

                <div className="bottom-button-container">
                    <p className="flag-text">{flagText}</p>
                    <JrButton className="bottom-button" btnStyle={'standard'}>
                        {buttonText}
                    </JrButton>
                </div>
            </div>
        </div>
    )
}
