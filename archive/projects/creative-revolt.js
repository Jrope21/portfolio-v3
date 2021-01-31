import React from 'react'
import ProjectDetailTemplate from '@templates/project-detail.template'

import Img1 from '@images/project-detail/creative-revolt/1.jpg'
import Img2 from '@images/project-detail/creative-revolt/2.jpg'
import Img3 from '@images/project-detail/creative-revolt/3.jpg'
import Img4 from '@images/project-detail/creative-revolt/4.jpg'
import Img5 from '@images/project-detail/creative-revolt/5.jpg'

export default function ProjectDetail() {
    return <ProjectDetailTemplate
        title={'Creative Revolt'}
        year={'2018'}
        url={'https://www.writingrevolt.com'}
        linkText={'creativerevolt.com'}
        description={`
            <p>
                This was a freelance project to <strong>rework the website layout</strong> and tailor the feel of the website to her personal writing style. I <strong>revamped the color palette</strong> to better match her personality, adjusted her website for <strong>SEO</strong>, and created the landing page as well as multiple pages across the platform. 
            </p>
        `}
        skills={[
            'JavaScript (ES6+)',
            'jQuery',
            'AJAX / JSON',
            'CSS',
            'PHP',
            'HTML (WCAG Compliant)',
            'BitBucket',
            'SEO',
            'Google Analytics',
            'WordPress',
            'Canva',
            'Adobe XD',
            'MailChimp',
            'Convert Kit'
        ]}
        images={[
            {
                src: Img1,
                alt: `The landing page for Creative Revolt`,
            },
            {
                src: Img2,
                alt: `A call to action setup for Creative Revolt`,
            },
            {
                src: Img3,
                alt: `The about page for Creative Revolt`,
            },
            {
                src: Img4,
                alt: `A call to action exculusively design for Creative Revolt`,
            },
            {
                src: Img5,
                alt: `A page from creative revolt that introduces customers to her their courses`,
            },
        ]}
    />
}
