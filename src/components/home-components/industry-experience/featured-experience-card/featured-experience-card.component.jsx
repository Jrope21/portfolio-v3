import React from 'react'
import './featured-experience-card.styles.scss'

import TextDisplacement from '@common-components/text-displacement/text-displacement.component'
import JrLink from '@common-components/jr-link/jr-link.component'

export default function FeaturedExperienceCard({
    isVisible = false,
    name,
    location,
    startYear,
    endYear,
    title,
    links = [],
    jobDescriptionBullets
}) {
    return (
        <div  
            data-sal="mount"
            className={`featured-experience-card__module ${isVisible ? 'active activate-animations__scoped' : ''}`}
        >
            <div className="location-and-dates-container">
                <p 
                    style={{ transitionDelay: `325ms` }} 
                    className="job-location fade-up__scoped">
                    <span className="sr-only">{name} is located at </span>
                    {location}
                </p>
                <div 
                    style={{ transitionDelay: `250ms` }} 
                    className="fade-up__scoped"
                >
                    <div className="year-text">
                    {startYear} &nbsp;{endYear}
                    </div>
                    {/* <TextDisplacement 
                        text={`${startYear} &nbsp;${endYear}`}
                        textClassName=""
                        containerClassName="job-dates-container"
                    /> */}
                </div>
               
            </div>
            <h3 
                style={{ transitionDelay: `400ms` }} 
                className="job-title fade-up__scoped"
            >{title}</h3>
            {links && 
                <p 
                    style={{ transitionDelay: `475ms` }} 
                    className="job-links fade-up__scoped"
                >
                    <span className="sr-only">Links relevant to my time at {name}: </span>
                    {links.map(({ href, text }, i) => (
                        <JrLink 
                            className="job-link" 
                            href={href} 
                            key={text + i}
                        >{text}</JrLink>
                    ))}
                    
                </p>
            }        
            <ul className="job-description-bullets">
                {jobDescriptionBullets.map(({ text, links, key }, i) => (
                    <li 
                        className="fade-up__scoped"
                        style={{ transitionDelay: `${550 + i * 75}ms`}} 
                        key={key + 'featured-experience-card-job-bullets fade-up__scoped'}
                    >
                        {text}
                        {links && 
                            <div className="description-bullet-links">
                                <span className="sr-only">Here's some website examples: </span>
                                <span dangerouslySetInnerHTML={{ __html: links }}/>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}
