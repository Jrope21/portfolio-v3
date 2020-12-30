import React from 'react'

import ProjectDetailCarousel from '@project-detail-components/project-detail-carousel/project-detail-carousel.component'
import ProjectText from '@project-detail-components/project-text/project-text.component'
import ProjectDetailFeaturedProjects from '@project-detail-components/project-detail-featured-projects/project-detail-featured-projects.component'

import Img1 from '@images/project-detail/uptexas/1.jpg'

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
        <main className="project-detail__template project-detail-container">
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

            <ProjectDetailFeaturedProjects
            
            />
        </main>
    )
}