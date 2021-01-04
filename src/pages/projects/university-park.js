import React from 'react'
import ProjectDetailTemplate from '@templates/project-detail/project-detail.template'

import Img1 from '@images/project-detail/uptexas/1.jpg'
import Img2 from '@images/project-detail/uptexas/2.jpg'
import Img3 from '@images/project-detail/uptexas/3.jpg'
import Img4 from '@images/project-detail/uptexas/4.jpg'
import Img5 from '@images/project-detail/uptexas/5.jpg'

export default function ProjectDetail() {
    return <ProjectDetailTemplate
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
        images={[
            {
                src: Img1,
                alt: `The home page for the City of University Park website`,
            },
            {
                src: Img2,
                alt: `The library page for the City of University Park website`,
            },
            {
                src: Img3,
                alt: `The video modal on the City of University Park website`,
            },
            {
                src: Img4,
                alt: `The direct alarm monitoring form for the City of University Park website`,
            },
            {
                src: Img5,
                alt: `The newsletter page for the City of University Park website`,
            },
        ]}
    />
}
