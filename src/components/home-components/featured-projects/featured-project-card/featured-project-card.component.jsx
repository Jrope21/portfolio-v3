import React from 'react'
import './featured-project-card.styles.scss'

import LinkIcon from '@images/commons/link_icon.svg'
import JrPointer from '@common-components/jr-pointer/jr-pointer.component'

export default function FeaturedProjectCard({
   name,
   description,
   year,
   skills,
   keyId,
   url,
   altLayout,
    ...otherProps
}) {
    
    return (
        <div 
            className={`featured-project-card__module fade-up__mount${altLayout ? ' alternate-layout' : ''}`} 
            {...otherProps}
        >
            <div className="project-top-section">
                <h3 className="project-title">
                    <a href={url} rel="noopener" target="_blank">
                        {name} 
                        <img src={LinkIcon} alt={`Icon that links to ${name}`}/>
                    </a>
                </h3>
                <p className="project-description">{description}</p>
            </div>         
            <div className="project-bottom-section">
                <div className="project-year-container">
                    <span className="project-year-text">
                        {year}
                    </span>              
                </div>
                <ul className="project-skills">
                    {skills.map((skill, i) => (
                        <li key={keyId + skill + i + 'project-card-skills'}>
                            {skill}
                        </li>
                    ))}
                </ul>
                <button className="project-details-btn">
                    Project Details
                    <JrPointer
                        className="detail-btn-pointer"
                        size={'small'}
                    />
                </button>
            </div>
        </div>
    )
}
