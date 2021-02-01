import React from 'react'
import './statement-and-skills.styles.scss'

import GatsbyImage from "gatsby-image"

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SkillsList from '@common-components/skills-list/skills-list.component'

const StatementAndSkills = React.forwardRef(({ sectionRef, activateAnimations = false, moduleData }) => {
    
    const {
        featured_image,
        numbered_section_details,
        skills,
        statement
    } = moduleData;

    return (
        <section 
            ref={sectionRef}
            className="statement-and-skills__module"
            data-sal="mount"
        >

            <div className="relative">
        
                <div className="top-container">

                    <NumberedSectionTitle
                        className="title-sections fade-up__mount"
                        title={numbered_section_details.title} 
                        sectionNumber={numbered_section_details.section_number}
                        sectionName="about"
                    />

                    <p 
                        className="statement fade-up__mount"
                        style={{ transitionDelay: '200ms' }}
                    >
                        {/* TODO -- mergis into div.. add p tag in content */}
                        <span  
                            dangerouslySetInnerHTML={{ __html: statement }}
                        />
                    </p>

                </div>

                <div 
                    className="hero-image fade-up__mount"
                    style={{ transitionDelay: '100ms' }}
                >
                    <GatsbyImage
                        className="hero-image-gatsby"
                        alt={featured_image.alt}
                        fluid={featured_image.src.childImageSharp.fluid}
                    />
                </div>

            </div>

            <SkillsList 
                className="skills"
                skills={skills} 
            />
        </section>
    )
});

export default StatementAndSkills;
