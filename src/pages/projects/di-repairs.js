import React from 'react'
import ProjectDetailTemplate from '@templates/project-detail/project-detail.template'

import Img1 from '@images/project-detail/di-repairs/1.png'
import Img2 from '@images/project-detail/di-repairs/2.png'
import Img3 from '@images/project-detail/di-repairs/3.png'
import Img4 from '@images/project-detail/di-repairs/4.png'
import Img5 from '@images/project-detail/di-repairs/5.png'

export default function ProjectDetail() {
    return <ProjectDetailTemplate
        title={'Dialed-In Repairs'}
        year={'2020'}
        url={'https://www.direpairs.com'}
        linkText={'direpairs.com'}
        description={`
            <p>
                As the <strong>only developer &amp; designer</strong> on this freelance project. I completely re-envisioned the site design &amp; built the project from the ground up as an extremely performant <strong>SSG website</strong>. I utilized development &amp; design best practices with a focus on the <strong>user experience.</strong>
            </p>
        `}
        skills={[
            'React',
            'Gatsby',
            'Graph QL',
            'Node JS',
            'JavaScript (ES8+)',
            'WordPress API',
            `Gravity Forms API (V2)`,
            'WebPack',
            'AJAX / JSON',
            'SASS / SCSS',
            'PHP',
            'JSX (WCAG Compliant)',
            'GitHub',
            'SEO',
            'Google Analytics',
            'WordPress (Headless)',
            'Netlify',
            'Figma',
        ]}
        images={[
            {
                src: Img1,
                alt: `The home page for DI-Repairs custom Gatsby website`,
            },
            {
                src: Img2,
                alt: `A multistep form with API integration on the DI-Repairs website`,
            },
            {
                src: Img3,
                alt: `A contact call-to-action for DI-Repairs custom Gatsby website`,
            },
            {
                src: Img4,
                alt: `A custom hero component on the DI-Repairs website`,
            },
            {
                src: Img5,
                alt: `Custom call-to-action's to various services on DI-Repairs`,
            },
        ]}
    />
}
