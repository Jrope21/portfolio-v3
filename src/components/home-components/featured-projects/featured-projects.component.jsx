import React from 'react'
import './featured-projects.styles.scss'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'
import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'

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
                <div className="text-title-cta">
                    <div className="top">
                        <span className="large-text-title">A</span>
                        <p className="sub-title">Use archive for the full list of projects I've worked on.</p>
                        {/* TODO -- turn into svg & sperate react component */}
                        <JrPointer
                            className="featured-title-pointer"
                        />
                        {/* <span className="pointer">
                            <span className="middle-line"></span>
                        </span> */}
                    </div>

                    <span className="bottom large-text-title">RCHIVE</span>
                </div>
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
