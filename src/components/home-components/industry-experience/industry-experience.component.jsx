import React, { useState, useEffect } from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedExperienceCard from './featured-experience-card/featured-experience-card.component'

import { experienceData } from './_data'

const IndustryExperience = React.forwardRef(({ sectionRef, activateAnimations = false }) => {

    const [activeExperienceListing, setActiveExperienceListing] = useState(experienceData[0].key)
    const [isCardAnimationsActive, setIsCardAnimationsActive] = useState(false);

    useEffect(() => {
        if(activateAnimations) setTimeout(() => {
            setIsCardAnimationsActive(true);
        }, 150)
    }, [activateAnimations])

    return (
        <section 
            data-sal="mount"
            ref={sectionRef}
            className={`
                industry-experience__module   
            `}
        >
            <div className={`
                left
                ${activateAnimations ? '' : 'deactivate-animations'}
                ${isCardAnimationsActive ? '' : 'deactivate-card-animation'}
            `}>
                <NumberedSectionTitle 
                    className="title-sections fade-up__mount"
                    title="My Industry Experience" 
                    sectionNumber="1" 
                    sectionName="experience"
                />
                <div 
                    className="mobile-line-seperator fade-up__mount" 
                    style={{ transitionDelay: '100ms' }}
                />
                <ul className="experience-content-list-container">
                    {experienceData.map((experience, i) => (
                        <li 
                            className={`experience-content  ${activeExperienceListing === experience.key ? 'active' : ''}`}
                            key={experience.key + 'filters'}
                        >
                            <div 
                                onClick={() => {
                                    setActiveExperienceListing(experience.key)
                                }}
                                className={`title-filter fade-up__mount`}
                                style={{ transitionDelay: `${200 + i * 100}ms` }}
                            >
                                <span className="title-text-animate">
                                    {experience.name}
                                </span> 
                                <span className="lg-animation-line"></span>
                            </div>
                             
                            <div 
                                className={`
                                    featured-experience-card
                                    ${isCardAnimationsActive ? '' : 'deactivate-animations'}
                                `}
                            >
                                <FeaturedExperienceCard 
                                    isVisible={activeExperienceListing === experience.key}
                                    name={experience.name}
                                    location={experience.location}
                                    startYear={experience.startYear}
                                    endYear={experience.endYear}
                                    title={experience.title}
                                    links={experience.links}
                                    jobDescriptionBullets={experience.jobDescriptionBullets}
                                />
                            </div>
                           
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
});

export default IndustryExperience
