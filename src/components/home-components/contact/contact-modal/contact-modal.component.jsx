import React from 'react'
import './contact-modal.styles.scss'

import CloseButton from '@common-components/icons/close-button/close-button.component'
import JrButton from '@common-components/jr-button/jr-button.component'
import CheckMark from '@common-components/icons/check-mark/check-mark.component'

export default function ContactModal({
    title,
    description,
    flagText,
    buttonText,
    isVisible,
    closeModal
}) {
    return (
        <div className={`contact-modal__module ${isVisible ? 'activate-animations__scoped' : ''}`}>
            <div className={`contact-modal-inner-container fade-up__scoped`}>
                <div className="contact-modal-left">
                    <CheckMark
                        className="check-mark-icon"
                        isClickable={true}
                        style={{ transitionDelay: `200ms` }}
                        onClick={closeModal}
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
                        <JrButton 
                            className="bottom-button" 
                            btnStyle={'standard'}
                            onClick={closeModal}
                        >
                            {buttonText}
                        </JrButton>
                    </div>
                </div>

                <div 
                    className="fade-up__scoped close-btn-container"
                    style={{ transitionDelay: `350ms` }}    
                >
                    <CloseButton
                        className="close-btn"
                        onClick={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}
