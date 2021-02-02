import React from 'react'

import ProjectDetailCarousel from '@project-detail-components/project-detail-carousel/project-detail-carousel.component'
import ProjectText from '@project-detail-components/project-text/project-text.component'
import ProjectDetailFeaturedProjects from '@project-detail-components/project-detail-featured-projects/project-detail-featured-projects.component'
import { formatLinkText } from '../helpers/_format-link-text'

export default function ProjectDetailTemplate({
    pageContext: {
        pageData = {}
    } = {pageData: {}}
}) {

    return (
        <main className="project-detail__template content-page-container container-vertical-spacer">
            <ProjectText 
                title={pageData.full_name ? pageData.full_name : pageData.name}
                year={pageData.year}
                url={pageData.url}
                linkText={formatLinkText(pageData.url)}
                description={pageData.description}
                skills={pageData.tech.full_list}
            />

            <ProjectDetailCarousel 
                images={pageData.images}
            />

            <ProjectDetailFeaturedProjects />
        </main>
    )
}