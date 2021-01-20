import React from 'react'
import './contact-modal.styles.scss'

// import JrLink from '@common-components/jr-link/jr-link.component'
import JrButton from '@common-components/jr-button/jr-button.component'
import CheckMark from '@common-components/icons/check-mark/check-mark.component'

export default function ContactModal({
    title,
    description,
    flagText,
    buttonText,
    isVisible
}) {
    return (
        <div className={`contact-modal__module fade-up__scoped ${isVisible ? 'activate-animations__scoped' : ''}`}>
            <div className="contact-modal-left">
                <CheckMark
                    className="check-mark-icon"
                    isClickable={true}
                    style={{ transitionDelay: `200ms` }}
                />
            </div>
            <div className="contact-modal-right">
                <h2 
                    className="title fade-up__scoped"
                    style={{ transitionDelay: `250ms` }}
                >{title}</h2>
                <p 
                    className="description fade-up__scoped"
                    style={{ transitionDelay: `300ms` }}
                >{description}</p>

                <div 
                    className="bottom-button-container fade-up__scoped"
                    style={{ transitionDelay: `350ms` }}
                >
                    <p className="flag-text">{flagText}</p>
                    <JrButton className="bottom-button" btnStyle={'standard'}>
                        {buttonText}
                    </JrButton>
                </div>
            </div>
        </div>
    )
}
