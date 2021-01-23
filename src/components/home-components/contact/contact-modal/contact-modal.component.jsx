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
    closeModal,
    submissionError
}) {
    return (
        <div className={`contact-modal__module ${isVisible ? 'activate-animations__scoped' : ''}`}>
            <div className={`contact-modal-inner-container fade-up__scoped fade-down-out`}>
                <div className="contact-modal-left">
                    {!submissionError ? 
                        <CheckMark
                            className="check-mark-icon"
                            isClickable={true}
                            style={{ transitionDelay: `200ms` }}
                            onClick={closeModal}
                        />
                    :
                        <CloseButton
                            className="error-icon-container"
                            iconClassName="error-icon"
                            style={{ transitionDelay: `200ms` }}
                            onClick={closeModal}
                        />
                    }
                   
                </div>
                <div className="contact-modal-right">
                    <h2 
                        className="title fade-up__scoped"
                        style={{ transitionDelay: `300ms` }}
                    >{title}</h2>
                    <p 
                        className="description fade-up__scoped"
                        style={{ transitionDelay: `400ms` }}
                    >{description}</p>

                    <div 
                        className="bottom-button-container fade-up__scoped"
                        style={{ transitionDelay: `500ms` }}
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
                    className="close-btn-container"
                    style={{ transitionDelay: `600ms` }}    
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
