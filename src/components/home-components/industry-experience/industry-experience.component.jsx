import React, { useState, useEffect } from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedExperienceCard from './featured-experience-card/featured-experience-card.component'

const IndustryExperience = React.forwardRef(({ sectionRef, activateAnimations = false, moduleData }) => {

    const { numbered_section_details, experience_list } = moduleData;

    const [activeExperienceListing, setActiveExperienceListing] = useState(experience_list[0].key)
    const [isCardAnimationsActive, setIsCardAnimationsActive] = useState(false);

    useEffect(() => {
        if(activateAnimations) setTimeout(() => {
            setIsCardAnimationsActive(true);
        }, 100)
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
                    title={numbered_section_details.title} 
                    sectionNumber={numbered_section_details.section_number} 
                    sectionName="experience"
                />
                <div 
                    className="mobile-line-seperator" 
                />
                <ul className="experience-content-list-container">
                    {experience_list.map((experience, i) => (
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
                                    fade-up__mount
                                    ${isCardAnimationsActive ? '' : 'deactivate-animations'}
                                `}
                                style={{ transitionDelay: `700ms` }}
                            >
                                <FeaturedExperienceCard 
                                    isVisible={activeExperienceListing === experience.key}
                                    name={experience.name}
                                    location={experience.location}
                                    startYear={experience.start_year}
                                    endYear={experience.end_year}
                                    title={experience.title}
                                    links={experience.links}
                                    jobDescriptionBullets={experience.job_description_bullets}
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


