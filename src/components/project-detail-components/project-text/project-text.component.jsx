import React from 'react'
import './project-text.styles.scss'

import LinkIcon from '@images/commons/link_icon.svg'
import SkillsList from '../../common-components/skills-list/skills-list.component'

export default function ProjectText({
    title,
    year,
    url,
    linkText,
    description,
    skills = []
}) {
    return (
        <section className="project-text__module">
            <h1 className="project-title">{title}</h1> 
            <div className="link-and-year-container">
                <a href={url} rel="noopener" target="_blank" className="project-link">
                    {linkText}
                    <img src={LinkIcon} alt={`Icon that links to ${title}`} />
                </a>
                <div className="year">
                    <span className="text-displacement">
                        {year}
                    </span>  
                </div>
            </div>

            <div className="description-and-skills-container">
                <span className="design-element-line" />
                <div 
                    className="project-description" 
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <SkillsList 
                    className="skills-list"
                    skills={skills} 
                />
            </div>        
        </section>
    )
}
