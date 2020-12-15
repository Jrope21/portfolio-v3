import React from 'react'
import './featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

const FeaturedProjects = ({ sectionRef, projects }) => {
    return (
        <section 
            ref={sectionRef}
            className="featured-projects__module"
        >
            <NumberedSectionTitle 
                className="section-titles"
                title="Projects I've Worked On" 
                sectionNumber={'2'} 
                sectionName="projects"
            />
            
            <div className="projects-container">
                {projects.map(project => (
                    <SplitTextCta 
                         title={projects.title}
                         numberOfTitleLettersOnTop={project[numberOfTitleLettersOnTop] ? project[numberOfTitleLettersOnTop] : 1}
                         year={projects.year}
                         urlPath={project.path}
                         isProjectLink={true}     
                         isProjectLinkActive={true}
                     />
                ))}
            </div>

            <JrButton 
                urlPath={'/project-detail'}
                text={'Use archive for the full list of projects I’ve worked on.'}
            />

        </section>
    )
};

export default FeaturedProjects
