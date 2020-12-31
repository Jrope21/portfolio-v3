import React from 'react'
import './featured-project-card.styles.scss'

import { Link } from 'gatsby'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'

import LinkIcon from '@images/commons/link_icon.svg'

export default React.memo(function FeaturedProjectCard({
   name,
   description,
   year,
   skills,
   keyId,
   url,
   urlPath,
   altLayout,
    ...otherProps
}) {
    
    return (
        <div 
            className={`featured-project-card__module fade-up__mount${altLayout ? ' alternate-layout' : ''}`} 
            {...otherProps}
        >
            <div>
      
            
                <div id="project-top-section" className="project-top-section">
                    <h3 className="project-title">
                        
                        <a href={url} rel="noopener" target="_blank">
                            {name} 
                            <img src={LinkIcon} alt={`Icon that links to ${name}`}/>
                        </a>
                    </h3>
                    {/* BUG -- this must be hidden until scroll reveal works */}
                    <p
                        className="project-description" 
                        dangerouslySetInnerHTML={{ __html: description }} 
                    />
                </div> 
                     
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
                <Link to={urlPath} className="project-details-btn">
                    Project Details
                    <JrPointer
                        className="detail-btn-pointer"
                        size={'small'}
                    />
                </Link>
            </div>
        </div>
    )
})
