import React from 'react'

import ProjectDetailCarousel from '@project-detail-components/project-detail-carousel/project-detail-carousel.component'
import ProjectText from '@project-detail-components/project-text/project-text.component'
import ProjectDetailFeaturedProjects from '@project-detail-components/project-detail-featured-projects/project-detail-featured-projects.component'

import Img1 from '@images/project-detail/uptexas/1.jpg'

export default function ProjectDetailTemplate() {
    return (
        <main className="project-detail__template project-detail-container">
            <ProjectText 
                title={'University Park'}
                year={'2019'}
                url={'https://www.uptexas.org'}
                linkText={'uptexas.org'}
                description={`
                    <p>
                        I was tasked with being the <strong>sole developer</strong> on a <strong>complete Front-End redesign.</strong> Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, <strong>form verification</strong>, and several <strong>third party integrations.</strong>
                    </p>
                `}
                skills={[
                    'JavaScript (ES6+)',
                    'jQuery',
                    'AJAX / JSON',
                    'API Integration',
                    'SASS | SCSS',
                    'CSS',
                    'Foundation',
                    'HTML (WCAG Compliant)',
                    'BitBucket',
                    'SEO',
                    'Kentico',
                    'Adobe Suite'
                ]}
            />

            <ProjectDetailCarousel 
                images={[
                    {
                        src: Img1,
                        alt: 'uptexas stuff'
                    },
                    {
                        src: Img1,
                        alt: 'uptexas stufffdsa'
                    },
                    {
                        src: Img1,
                        alt: 'uptexas stufffshgtr'
                    },
                    {
                        src: Img1,
                        alt: 'uptexas stuffbdxew'
                    },
                    {
                        src: Img1,
                        alt: 'uptexas stuff132hg'
                    },
                ]}
            />

            <ProjectDetailFeaturedProjects
            
            />
        </main>
    )
}