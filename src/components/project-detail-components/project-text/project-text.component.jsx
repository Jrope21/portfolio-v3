import React from 'react'
import './project-text.styles.scss'

import LinkIcon from '@images/commons/link_icon.svg'
import SkillsList from '@common-components/skills-list/skills-list.component'
import TextDisplacement from '@common-components/text-displacement/text-displacement.component'

export default function ProjectText({
    title,
    year,
    url,
    linkText,
    description,
    skills = []
}) {

    // const [isMounted]

    return (
        <section data-sal="mount" className="project-text__module">
            <h1 className="project-title fade-up__mount">{title}</h1> 
            <div className="link-and-year-container"  >
                <a 
                    href={url} 
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className="project-link fade-up__mount"
                    style={{ transitionDelay: `100ms` }}
                    
                >
                    {linkText}
                    <img src={LinkIcon} alt={`Icon that links to ${title}`} />
                </a>
                <div 
                    className="text-displacement-year-container fade-up__mount"
                    style={{ transitionDelay: `200ms` }}
                >
                    <TextDisplacement 
                        text={year}
                        textClassName="text-displacement-year-text"
                        // containerClassName="text-displacement-year-container "
                    />
                </div>
            
            </div>

            <div className="description-and-skills-container">
                <div className="design-element-line-container">
                    <span className="design-element-line" />
                </div>
                
                <div 
                    className="project-description fade-up__mount" 
                    style={{ transitionDelay: `700ms` }}
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
