import React from 'react'
import './featured-projects.styles.scss'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'
import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'
import TextTitleCta from '@home-components/text-title-cta/text-title-cta.component'

import { projectsData } from './_data'

export default function FeaturedProjects() {
    return (
        <section className="featured-projects__module container">
            <div className="titles-container">
                <NumberedSectionTitle 
                    className="section-titles"
                    title="Projects I've Worked On" 
                    sectionNumber={'2'} 
                />
                <TextTitleCta 
                    title={'Archive'}
                    description={`Use archive for the full list of projects I've worked on.`}
                    urlPath={'/archive'}
                />
            </div>
            
            <div className="projects-container">
                {projectsData.map(project => (
                    <FeaturedProjectCard 
                        key={project.key}
                        name={project.name}
                        description={project.description}
                        year={project.year}
                        skills={project.skills}
                    />
                ))}
            </div>

            <a className="view-all-button" role="button" href="">
                Use archive for the full list of projects I’ve worked on.
                <JrPointer 
                    altColor={true}
                    size={'small'}
                />
            </a>

        </section>
    )
}
