import React from 'react'
import './project-detail-featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

import { featuredProjects } from './_data'

const ProjectDetailFeaturedProjects = () => {

    const currentUrlPath = document.location.pathname;
    // console.log(currentUrlPath)

    return (
        <section 
            data-sal="mount"
            className="project-detail-featured-projects__module"
        >
            
            <span aria-hidden="true" className="design-element-line"></span>

            <NumberedSectionTitle 
                className="section-titles fade-up__mount"
                title="Projects I've Worked On" 
                sectionNumber={'2'} 
                sectionName="projects"
            />
            
            <div className="projects-container">
                {featuredProjects.map((project, i) => (
                    <div 
                        key={project.key}
                        className="project-wrapper fade-up__mount"
                        style={{ transitionDelay: `${100 + i * 100}ms` }}
                    >
                         <SplitTextCta 
                            title={project.title}
                            description={'Project Details'}
                            numberOfTitleLettersOnTop={project.numberOfTitleLettersOnTop}
                            year={project.year}
                            urlPath={project.urlPath}
                            isProjectLink={true}
                            deactivateLink={currentUrlPath.match(project.urlSegment)}
                        />
                    </div>             
                ))}
            </div>

            <JrButton 
                className={'view-all-btn fade-up__mount'}
                style={{ transitionDelay: `${100 + featuredProjects.length * 100}ms` }}
                urlPath={'/project-detail'}
                text={'Use archive for the full list of projects I’ve worked on.'}
            />

        </section>
    )
};

export default ProjectDetailFeaturedProjects;
