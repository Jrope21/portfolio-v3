import React, { useState } from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import { experienceData } from './_data'

import FeaturedExperienceCard from './featured-experience-card/featured-experience-card.component'


const IndustryExperience = React.forwardRef(({ sectionRef }) => {

    const [activeExperienceListing, setActiveExperienceListing] = useState(experienceData[0].key)

    return (
        <section 
            ref={sectionRef}
            className="industry-experience__module"
        >
            <div className="left">
                <NumberedSectionTitle 
                    className="title-sections"
                    title="My Industry Experience" 
                    sectionNumber="1" 
                    sectionName="experience"
                />
                <div className="mobile-line-seperator" />
                <ul className="experience-content-list-container">
                    {experienceData.map((experience) => (
                        <li 
                            className="experience-content"
                            key={experience.key + 'filters'}
                        >
                            <div 
                                onClick={() => {
                                    setActiveExperienceListing(experience.key)
                                    console.log(activeExperienceListing)
                                }}
                                className={`title-filter ${activeExperienceListing === experience.key ? 'active' : ''}`}
                            >
                                <span className="title-text-animate">
                                    {experience.name}
                                </span> 
                            </div>
                             
                            <div className="featured-experience-card">
                                <FeaturedExperienceCard 
                                    // key={experience.key}
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
            {/* <div className="right">
                {experienceData.map(experience => (
                    <FeaturedExperienceCard 
                        key={experience.key}
                        isVisible={activeExperienceListing === experience.key}
                        name={experience.name}
                        location={experience.location}
                        startYear={experience.startYear}
                        endYear={experience.endYear}
                        title={experience.title}
                        links={experience.links}
                        jobDescriptionBullets={experience.jobDescriptionBullets}
                    />
                ))}
            </div> */}
        </section>
    )
});

export default IndustryExperience
