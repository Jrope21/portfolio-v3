import React from 'react'
import './contact.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import TextTitleCta from '@home-components/text-title-cta/text-title-cta.component'

export default function Contact() {
    return (
        <section className="contact__module container">
            <div className="titles-container">
                <NumberedSectionTitle
                    className="section-titles"
                    title="Projects I've Worked On" 
                    sectionNumber={'4'} 
                />
                <TextTitleCta 
                    title={'Connect'}
                    description={'Send me an email, let’s get connected!'}
                    altColors={true}
                />
                {/* <div className="text-title-cta">
                    <div className="top">
                        <span className="large-text-title">C</span>
                        <p className="sub-title">Send me an email, let’s get connected!</p>
                    </div>

                    <span className="bottom large-text-title">ONNECT</span>
                </div> */}
            </div>
        </section>
    )
}
