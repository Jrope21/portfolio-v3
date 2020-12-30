import React from 'react'
import './statement-and-skills.styles.scss'

import styles from '@styles/variables.scss'

import HeroImageDesktop from '@images/home/about-me-desktop-img.jpg'
import HeroImageMobile from '@images/home/about-me-mobile-img.jpg'
import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import { skillsData } from './_data'

const StatementAndSkills = React.forwardRef(({ sectionRef, activateAnimations = false }) => {
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

            <picture 
                className="hero-image fade-up__mount"
                style={{ transitionDelay: '100ms' }}
            >
                <source 
                    srcSet={HeroImageDesktop}
                    media={`(min-width: ${styles.breakpointSm}px)`} 
                />
                <img src={HeroImageMobile} alt="Joshua Roper, a Senior Front End Developer"/>
            </picture>
            </div>

            <ul 
                className="skills list-animate__mount"    
            >
                {skillsData.map((skills, i) => (
                    <li 
                        key={'statement-skills-list' + skills}
                        className="fade-up__mount"
                        style={{ transitionDelay: `${450 + i * 50}ms` }}
                    >{skills}</li>
                ))}
            </ul>
        </section>
    )
});

export default StatementAndSkills;
