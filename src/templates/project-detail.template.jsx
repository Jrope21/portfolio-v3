import React from 'react'
import ProjectText from '../components/project-detail-components/project-text/project-text.component'

export default function ProjectDetailTemplate() {
    return (
        <main className="project-detail__template container">
            <ProjectText 
                title={'University Park'}
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
        </main>
    )
}

// title,
//     year,
//     url,
//     linkText,
//     description,
//     skills = []