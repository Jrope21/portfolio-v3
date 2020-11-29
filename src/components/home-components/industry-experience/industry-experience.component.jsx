import React, { useState } from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import { experienceData } from './_data'

import FeaturedExperienceCard from './featured-experience-card/featured-experience-card.component'

export default function IndustryExperience() {

    const [activeExperienceListing, setActiveExperienceListing] = useState(experienceData[0].key)

    return (
        <section className="industry-experience__module container">
            <div className="left">
                <NumberedSectionTitle 
                    className="title-sections"
                    title="My Industry Experience" 
                    sectionNumber="1" 
                />
                <ul className="experience-title-filters">
                    {experienceData.map(({ key, name }) => (
                        <li 
                            onClick={() => {
                                setActiveExperienceListing(key)
                                console.log(activeExperienceListing)
                            }}
                            className={`title-filter ${activeExperienceListing === key ? 'active' : ''}`} 
                            key={key + 'filters'}
                        >
                            <span className="text-animate">
                                {name}
                            </span>         
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right">
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
            </div>
        </section>
    )
}
