import React, { useState, useEffect } from 'react'
import './featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

import { projectsData } from './_data'

const FeaturedProjects = React.forwardRef(({ sectionRef }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])
    return (
        <section 
            ref={sectionRef}
            className={`featured-projects__module ${isMounted ? 'activate-animations__mount' : ''}`}
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
                        keyId={project.key}
                        name={project.name}
                        description={project.description}
                        year={project.year}
                        skills={project.skills}
                    />
                ))}
            </div>

            <JrButton 
                urlPath={'/project-detail'}
                text={'Use archive for the full list of projects I’ve worked on.'}
            />
                
         

        </section>
    )
});

export default FeaturedProjects
