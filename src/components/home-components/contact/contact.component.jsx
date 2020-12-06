import React, { useState } from 'react'
import './contact.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import TextTitleCta from '@home-components/text-title-cta/text-title-cta.component'

const Contact = React.forwardRef(({ sectionRef }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section 
            ref={sectionRef}
            className="contact__module"
        >
            <div className="titles-container">
                <NumberedSectionTitle
                    className="section-titles"
                    title="Get In Touch<br /> With Me" 
                    sectionNumber={'4'} 
                    sectionName="contact"
                />
                <TextTitleCta 
                    title={'Connect'}
                    description={'Send me an email, let’s get connected!'}
                    altColors={true}
                />
            </div>

            <form className="contact-form" action="">
                <label className="contact-label" htmlFor="contact-name">
                <span className="contact-label-text">Name</span>
                    <input 
                        disabled={isSubmitting ? 'disabled' : ''}
                        type="text" 
                        name="name" 
                        id="contact-name"
                        className="contact-input"
                    />
                </label>
                <label className="contact-label" htmlFor="contact-email">
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
                <label className="contact-label" htmlFor="contact-message">
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

                <button className="contact-submit-btn" type="submit">
                    Send Message
                </button>
            </form>
        </section>
    )
});

export default Contact;
