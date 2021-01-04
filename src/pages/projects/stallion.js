import React from 'react'
import ProjectDetailTemplate from '@templates/project-detail/project-detail.template'

import Img1 from '@images/project-detail/stallion/1.jpg'
import Img2 from '@images/project-detail/stallion/2.jpg'
import Img3 from '@images/project-detail/stallion/3.jpg'
import Img4 from '@images/project-detail/stallion/4.jpg'
import Img5 from '@images/project-detail/stallion/5.jpg'

export default function ProjectDetail() {
    return <ProjectDetailTemplate
        title={'Stallion Oilfield'}
        year={'2019'}
        url={'https://www.stallion.com'}
        linkText={'stallion.com'}
        description={`
            <p>
                As the <strong>Lead Front End Developer</strong> on a <strong>complete website rebuild</strong>, I worked towards envisioning a website that would match their innovative Stallion attitude. The project was built with an <strong>emphasis</strong> on <strong>clean code</strong>, and <strong>modularity.</strong> The website includes multiple API’s, form verification, and other advanced modules.
            </p>
        `}
        skills={[
            'JavaScript (ES6+)',
            'jQuery',
            'API Integration',
            'WebPack',
            'AJAX / JSON',
            'SASS / SCSS',
            'Foundation',
            'PurgeCSS',
            'PostCSS',
            'PHP',
            'HTML (WCAG Compliant)',
            'BitBucket',
            'SEO',
            'Google Analytics',
            'WordPress',
            'Adobe XD',
        ]}
        images={[
            {
                src: Img1,
                alt: `Stallion's location page for their custom website`,
            },
            {
                src: Img2,
                alt: `A custom slider on the stallion website`,
            },
            {
                src: Img3,
                alt: `The services page on Stallion's custom website`,
            },
            {
                src: Img4,
                alt: `A unique hero image on Stallion's custom website`,
            },
            {
                src: Img5,
                alt: `A page on stallion utilizing the google maps api`,
            },
        ]}
    />
}
