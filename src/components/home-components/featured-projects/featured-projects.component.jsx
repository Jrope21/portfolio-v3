import React from 'react'
import './featured-projects.styles.scss'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'
import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'

import { projectsData } from './_data'

const FeaturedProjects = React.forwardRef(({ sectionRef }) => {
    return (
        <section 
            ref={sectionRef}
            className="featured-projects__module"
        >
            <div className="titles-container">
                <NumberedSectionTitle 
                    className="section-titles"
                    title="Projects I've Worked On" 
                    sectionNumber={'2'} 
                    sectionName="projects"
                />
                <SplitTextCta 
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
                <span className="text">
                    Use archive for the full list of projects I’ve worked on.
                </span>
                <JrPointer 
                    altColor={true}
                    size={'small'}
                />
            </a>
         

        </section>
    )
});

export default FeaturedProjects
