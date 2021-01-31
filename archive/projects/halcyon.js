import React from 'react'
import ProjectDetailTemplate from '@templates/project-detail.template'

import Img1 from '@images/project-detail/halcyon/1.jpg'
import Img2 from '@images/project-detail/halcyon/2.jpg'
import Img3 from '@images/project-detail/halcyon/3.jpg'
import Img4 from '@images/project-detail/halcyon/4.jpg'
import Img5 from '@images/project-detail/halcyon/5.jpg'

export default function ProjectDetail() {
    return <ProjectDetailTemplate
        title={'Halcyon Center'}
        year={'2019'}
        url={'https://www.visithalcyon.com'}
        linkText={'halcyon.com'}
        description={`
            <p>
                I was one of the Front End Developers on the project primarily tasked with creating the movies page and events directory. Across the project I worked with <strong>multiple API’s</strong>, <strong>React Static</strong>, and developed <strong>clean code</strong> for other advanced React components. 
            </p>
        `}
        skills={[
            'React',
            'React Static',
            'JavaScript (ES6+)',
            'iShowtimes API',
            `Google API's`,
            'WordPress API',
            'WebPack',
            'AJAX / JSON',
            'SASS / SCSS',
            'Bootstrap (React Bootstrap)',
            'PostCSS',
            'PHP',
            'JSX (WCAG Compliant)',
            'BitBucket',
            'SEO',
            'Google Analytics',
            'WordPress (Headless)',
            'Adobe XD',
        ]}
        images={[
            {
                src: Img1,
                alt: `A call to action on the home page of the Halcyon Center Mall website`,
            },
            {
                src: Img2,
                alt: `The home page for Halcyon Center Mall website`,
            },
            {
                src: Img3,
                alt: `The dining directory page of the Halcyon Center Mall website`,
            },
            {
                src: Img4,
                alt: `The events directory page of the Halcyon Center Mall website`,
            },
            {
                src: Img5,
                alt: `A spotlight for businesses on the home page of the Halcyon Center Mall website`,
            },
        ]}
    />
}
