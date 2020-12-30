import React, { useState, useEffect } from 'react'
import './featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

import { projectsData } from './_data'

const FeaturedProjects = React.forwardRef(({ sectionRef }) => {

    return (
        <section 
            data-sal="mount"
            ref={sectionRef}
            className={`featured-projects__module`}
        >
            <div className="titles-container">
                <NumberedSectionTitle 
                    className="section-titles fade-up__mount"
                    title="Projects I've Worked On" 
                    sectionNumber={'2'} 
                    sectionName="projects"
                    // style={{ transitionDelay: `100ms` }}
                />
                <SplitTextCta 
                    title={'Archive'}
                    description={`Use archive for the full list of projects I've worked on.`}
                    className="fade-up__mount"rlPath={'/archive'}
                    
                    style={{ transitionDelay: `150ms` }}
                />
            </div>
            
            <div className="projects-container">
                {projectsData.map((project, i) => (
                    <FeaturedProjectCard 
                        url={project.url}
                        urlPath={project.urlPath}
                        key={project.key}
                        keyId={project.key}
                        name={project.name}
                        description={project.description}
                        year={project.year}
                        skills={project.skills}
                        style={{ transitionDelay: `${300 + i * 100}ms` }}
                    />
                ))}
            </div>

            <JrButton 
                className="fade-up__mount"
                urlPath={'/project-detail'}
                text={'Use archive for the full list of projects I’ve worked on.'}
                style={{ transitionDelay: `900ms` }}
            />
                
         

        </section>
    )
});

export default FeaturedProjects
