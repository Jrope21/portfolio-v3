import React from 'react'
import './featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import FeaturedProjectCard from './featured-project-card/featured-project-card.component'
import SplitTextCta from '@common-components/split-text-cta/split-text-cta.component'
import JrButton from '@common-components/jr-button/jr-button.component'

const FeaturedProjects = React.forwardRef(({ sectionRef, moduleData, featuredProjects }) => {

    const {
        numbered_section_details,
        split_text_cta,
        button_cta
    } = moduleData;

     return (
        <section 
            data-sal="mount"
            ref={sectionRef}
            className={`featured-projects__module`}
        >

            <div className="titles-container">
                <NumberedSectionTitle 
                    className="section-titles fade-up__mount"
                    title={numbered_section_details.title} 
                    sectionNumber={numbered_section_details.section_number} 
                    sectionName="projects"
                />
                <SplitTextCta 
                    title={split_text_cta.title}
                    description={split_text_cta.sub_title}
                    className="fade-up__mount"
                    urlPath={split_text_cta.path}                  
                    style={{ transitionDelay: `150ms` }}
                />
            </div>
            
            <div className="projects-container">
                {featuredProjects.map(({ node: project }, i) => (
                    <FeaturedProjectCard
                        url={project.url}
                        urlPath={project.url_path}
                        key={project.key + i}
                        keyId={project.key}
                        name={project.name}
                        description={project.description}
                        year={project.year}
                        skills={project.tech.priority_list}
                        style={{ transitionDelay: `${300 + i * 100}ms` }}
                    />
                ))}
            </div>

            <JrButton 
                className="fade-up__mount"
                urlPath={button_cta.path}
                style={{ transitionDelay: `900ms` }}
            >
                {button_cta.title}
            </JrButton>
                
        </section>
    )
});

export default FeaturedProjects
