import React from 'react'

import ProjectDetailCarousel from '@project-detail-components/project-detail-carousel/project-detail-carousel.component'
import ProjectText from '@project-detail-components/project-text/project-text.component'
import ProjectDetailFeaturedProjects from '@project-detail-components/project-detail-featured-projects/project-detail-featured-projects.component'

export default function ProjectDetailTemplate({
    title,
    year,
    url,
    linkText,
    description,
    skills,
    images
}) {
    return (
        <main className="project-detail__template content-page-container container-vertical-spacer">
            <ProjectText 
                title={title}
                year={year}
                url={url}
                linkText={linkText}
                description={description}
                skills={skills}
            />

            <ProjectDetailCarousel 
                images={images}
            />

            <ProjectDetailFeaturedProjects />
        </main>
    )
}