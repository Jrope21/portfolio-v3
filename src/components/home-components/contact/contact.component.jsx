import React, { useState } from 'react'
import './contact.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'

const Contact = React.forwardRef(({ sectionRef }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section 
            data-sal="mount"
            ref={sectionRef}
            className="contact__module"
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

            <form className="contact-form" action="">
                <label 
                    className="contact-label fade-up__mount" 
                    htmlFor="contact-name"
                    style={{ transitionDelay: `200ms` }}
                >
                <span className="contact-label-text">Name</span>
                    <input 
                        disabled={isSubmitting ? 'disabled' : ''}
                        type="text" 
                        name="name" 
                        id="contact-name"
                        className="contact-input"
                    />
                </label>
                <label 
                    className="contact-label fade-up__mount" 
                    htmlFor="contact-email"
                    style={{ transitionDelay: `300ms` }}
                >
                    <span className="contact-label-text">Email</span>
                    <input 
                        disabled={isSubmitting ? 'disabled' : ''}
                        required="required"
                        type="email" 
                        name="name" 
                        id="contact-email"
                        className="contact-input"
                    />
                </label>
                <label 
                    className="contact-label fade-up__mount" 
                    htmlFor="contact-message"
                    style={{ transitionDelay: `400ms` }}
                >
                    <span className="sr-only">Type in any additional details here</span>
                    <textarea 
                        disabled={isSubmitting ? 'disabled' : ''}
                        name="description" 
                        id="contact-message" 
                        cols="30" 
                        rows="16"
                        placeholder="Type your message here."
                        className="contact-textarea"
                    ></textarea>
                </label>

                <button 
                    // onClick={}
                    className="contact-submit-btn fade-up__mount" 
                    type="submit"
                    style={{ transitionDelay: `500ms` }}
                >
                    Send Message
                </button>
            </form>
        </section>
    )
});

export default Contact;
