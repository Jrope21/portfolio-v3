import React from 'react'
import './statement-and-skills.styles.scss'

import GatsbyImage from "gatsby-image"

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SkillsList from '@common-components/skills-list/skills-list.component'

import { skillsData } from './_data'

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
                        title="Statement<br/> & Skills" 
                        sectionNumber="3" 
                        sectionName="about"
                    />

                    <p 
                        className="statement fade-up__mount"
                        style={{ transitionDelay: '200ms' }}
                    >
                        Hi there! I’m Josh, a Dallas-based <strong>front end developer</strong> with a knack for programming and design. My <strong>passion</strong> comes from being a part of a solution that brings each aspect of the customer journey together across both <strong>development and design</strong> processes. I focus on creating <strong>production-ready applications</strong> with my knowledge of the user experience, and writing scalable, <strong>clean code.</strong>
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
                    {/* <img src={HeroImageDesktop} alt="Joshua Roper, a Senior Front End Developer"/> */}
                </div>

            </div>

            <SkillsList 
                className="skills"
                skills={skillsData} 
            />
        </section>
    )
});

export default StatementAndSkills;
