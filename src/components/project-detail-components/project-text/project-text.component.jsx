import React from 'react'
import './project-text.styles.scss'

import SkillsList from '@common-components/skills-list/skills-list.component'
import ContentPageHeroTitles from '@common-components/content-page-hero-titles/content-page-hero-titles.component'

export default function ProjectText({
    title,
    year,
    url,
    linkText,
    description,
    skills = []
}) {

    return (
        <section data-sal="mount" className="project-text__module">
            <ContentPageHeroTitles
                title={title}
                href={url}
                linkText={linkText}
                year={year}
            />

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
