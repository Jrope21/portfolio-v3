import React, { useState } from 'react'
import './contact.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import DotLoader from '@common-components/icons/dot-loader/dot-loader.component';
import ContactModal from './contact-modal/contact-modal.component';

import useInputCollection from '@hooks/useInputCollection';

const INITIAL_INPUT_VALUES = {
    name: '',
    email: '',
    message: ''
}

const Contact = React.forwardRef(({ sectionRef }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);

    const [inputValues, actions] = useInputCollection(INITIAL_INPUT_VALUES);

    const submissionHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionSuccess(true);

            // setTimeout(() => {
            //     setSubmissionSuccess(true);
            // }, 1500)    
        }, 850)
    }

    const resetForm = () => {
        if(submissionSuccess) actions.resetInputValue('message')
        setIsSubmitting(false);
        setSubmissionError(false);
        setSubmissionSuccess(false);
    }

    return (
        <section 
            data-sal="mount"
            ref={sectionRef}
            className={`contact__module`}
        >
            <div className="titles-container">
                <NumberedSectionTitle
                    className="section-titles fade-up__mount"
                    title="Get In Touch<br /> With Me" 
                    sectionNumber={'4'} 
                    sectionName="contact"
                />
                <SplitTextCta 
                    className="fade-up__mount"
                    title={'Connect'}
                    description={'Send me an email, let’s get connected!'}
                    altColors={true}
                    style={{ transitionDelay: `100ms` }}
                />
            </div>
            <div className="form-outer-container">   
                <form className={`contact-form ${
                    isSubmitting || 
                    submissionSuccess || 
                    submissionError ? 'is-submitting' : ''}
                `} 
                    action=""
                >
                    <label 
                        className="contact-label fade-up__mount" 
                        htmlFor="contact-name"
                        style={{ transitionDelay: `200ms` }}
                    >
                    <span className="contact-label-text">Name</span>
                        <input 
                            disabled={
                                isSubmitting || 
                                submissionSuccess || 
                                submissionError? 'disabled' : ''
                            }
                            type="text" 
                            name="name" 
                            id="contact-name"
                            className="contact-input"
                            value={inputValues.name}
                            onChange={actions.updateInputValue}
                        />
                    </label>
                    <label 
                        className="contact-label fade-up__mount" 
                        htmlFor="contact-email"
                        style={{ transitionDelay: `300ms` }}
                    >
                        <span className="contact-label-text">Email</span>
                        <input 
                            disabled={
                                isSubmitting || 
                                submissionSuccess || 
                                submissionError? 'disabled' : ''
                            }
                            required="required"
                            type="email" 
                            name="email" 
                            id="contact-email"
                            className="contact-input"
                            value={inputValues.email}
                            onChange={actions.updateInputValue}
                        />
                    </label>
                    <label 
                        className="contact-label fade-up__mount" 
                        htmlFor="contact-message"
                        style={{ transitionDelay: `400ms` }}
                    >
                        <span className="sr-only">Type in any additional details here</span>
                        <textarea 
                            disabled={
                                isSubmitting || 
                                submissionSuccess || 
                                submissionError? 'disabled' : ''
                            }
                            name="message" 
                            id="contact-message" 
                            cols="30" 
                            rows="16"
                            placeholder="Type your message here."
                            className="contact-textarea"
                            value={inputValues.message}
                            onChange={actions.updateInputValue}
                        ></textarea>
                    </label>

                    <div className="fade-up__mount" style={{ transitionDelay: `500ms` }}>
                        <button 
                            onClick={submissionHandler}
                            className="contact-submit-btn hover:bg-change hover:_bg-secondary" 
                            type="submit"
                        >                       
                            <span className={`submit-btn-text`}>
                                Send Message
                            </span>
                            <DotLoader overlay={true} loading={isSubmitting} />
                        </button>
                    </div>
                </form>

                <ContactModal 
                    title={!submissionError ? 'Congrats!' : 'Uh Oh!'}
                    description={!submissionError ? 'Your message was submitted.' : 'Your message was not submitted.'}
                    flagText={`Don't Be Shy!`}
                    buttonText={!submissionError ? 'Send Another One' : 'Try Another One'}
                    submissionError={submissionError}
                    isVisible={submissionSuccess || submissionError}
                    closeModal={resetForm}
                />
            </div>

      
        </section>
    )
});

// title,
// description,
// flagText,
// buttonText

export default Contact;
