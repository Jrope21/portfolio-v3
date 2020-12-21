import React from 'react'
import './statement-and-skills.styles.scss'

import styles from '@styles/variables.scss'

import HeroImageDesktop from '@images/home/about-me-desktop-img.jpg'
import HeroImageMobile from '@images/home/about-me-mobile-img.jpg'
import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'

const StatementAndSkills = React.forwardRef(({ sectionRef }) => {
    return (
        <section 
            ref={sectionRef}
            className="statement-and-skills__module"
            data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
        >

            <div className="relative">

         
            <div className="top-container">

                <NumberedSectionTitle
                    className="title-sections"
                    title="Statement<br/> & Skills" 
                    sectionNumber="3" 
                    sectionName="about"
                />

                <p className="statement">
                    Hi there! I’m Josh, a Dallas-based <strong>front end developer</strong> with a knack for programming and design. My <strong>passion</strong> comes from being a part of a solution that brings each aspect of the customer journey together across both <strong>development and design</strong> processes. I focus on creating <strong>production-ready applications</strong> with my knowledge of the user experience, and writing scalable, <strong>clean code.</strong>
                </p>

            </div>

            <picture className="hero-image">
                <source 
                    srcSet={HeroImageDesktop}
                    media={`(min-width: ${styles.breakpointSm}px)`} 
                />
                <img src={HeroImageMobile} alt="Joshua Roper, a Senior Front End Developer"/>
            </picture>
            </div>

            <ul className="skills">
                <li>React | Redux</li>
                <li>Gatsby Js | React Static</li>
                <li>Svelte 3 | Sapper</li>
                <li>Node Js | Express</li>
                <li>JavaScript (ES8+)</li>
                <li>jQuery</li>
                <li>Asnychronus JavaScript</li>
                <li>WebPack</li>
                <li>Git (Version Control)</li>
                <li>Command Line</li>
                <li>SASS | SCSS</li>
                <li>CSS</li>
                <li>Foundation | Bootstrap</li>
                <li>HTML (WCAG compliant)</li>
                <li>HTML Emails</li>
                <li>GitHub | BitBucket</li>
                <li>WordPress | Kentico</li>
                <li>Adobe Suite</li>
                <li>Figma</li>
                <li>SEO</li>
                <li>Usability Testing</li>
                <li>Agile | Waterfall</li>
            </ul>

        </section>
    )
});

export default StatementAndSkills;
