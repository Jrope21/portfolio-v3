import React from 'react'
import './featured-experience-card.styles.scss'

import LinkIcon from '@images/commons/link_icon.svg'
import TextDisplacement from '@common-components/text-displacement/text-displacement.component'

export default function FeaturedExperienceCard({
    key,
    isVisible = false,
    name,
    location,
    startYear,
    endYear,
    title,
    links,
    jobDescriptionBullets
}) {
    return (
        <div 
            key={key + 'featured-experience-card'}
            className={`featured-experience-card__module ${isVisible ? 'active' : ''}`}
        >
            <div className="location-and-dates-container">
                <p className="job-location">
                    <span className="sr-only">{name} is located at </span>
                    {location}
                </p>
                <TextDisplacement 
                    text={`${startYear} &nbsp;${endYear}`}
                    textClassName=""
                    containerClassName="job-dates-container"
                />
            </div>
            <h3 className="job-title">{title}</h3>
            {links && 
                <p className="job-links">
                    <span className="sr-only">Links relevant to my time at {name}: </span>
                    <div 
                        dangerouslySetInnerHTML={{ __html: links }}
                    />
                    <img src={LinkIcon} alt="Icon indicating a link"/>
                </p>
            }        
            <ul className="job-description-bullets">
                {jobDescriptionBullets.map(({ text, links }) => (
                    <li>
                        {text}
                        {links && 
                            <div className="description-bullet-links">
                                <span className="sr-only">Here's some website examples: </span>
                                {links}
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}
