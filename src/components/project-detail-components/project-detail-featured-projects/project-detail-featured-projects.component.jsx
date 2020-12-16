import React from 'react'
import './project-detail-featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

import { featuredProjects } from './_data'

const ProjectDetailFeaturedProjects = () => {
    return (
        <section 
            className="project-detail-featured-projects__module"
        >
            <NumberedSectionTitle 
                className="section-titles"
                title="Projects I've Worked On" 
                sectionNumber={'2'} 
                sectionName="projects"
            />
            
            <div className="projects-container">
                {featuredProjects.map(project => (
                    <div className="project-wrapper">
                         <SplitTextCta 
                            title={project.title}
                            description={'Project Details'}
                            numberOfTitleLettersOnTop={project.numberOfTitleLettersOnTop}
                            year={project.year}
                            urlPath={project.urlPath}
                            isProjectLink={true}
                            deactivateLink={false}
                        />
                    </div>             
                ))}
            </div>

            <JrButton 
                urlPath={'/project-detail'}
                text={'Use archive for the full list of projects I’ve worked on.'}
            />

        </section>
    )
};

export default ProjectDetailFeaturedProjects;
