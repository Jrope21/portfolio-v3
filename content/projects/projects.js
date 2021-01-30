const projectFactory =  "./_project-factory";

const CreativeRevoltImg1 = require( '@images/project-detail/creative-revolt/1.jpg' )
const CreativeRevoltImg2 = require( '@images/project-detail/creative-revolt/2.jpg' )
const CreativeRevoltImg3 = require( '@images/project-detail/creative-revolt/3.jpg')
const CreativeRevoltImg4 = require( '@images/project-detail/creative-revolt/4.jpg')
const CreativeRevoltImg5 = require( '@images/project-detail/creative-revolt/5.jpg')

export const projectsData = [
    projectFactory({
        name: 'Di Repairs',
        full_name: 'Dialed-In Repiars',
        url: 'https://www.direpairs.com',
        url_path: '/projects/di-repairs',
        description: `
            As the only <strong>developer & designer</strong> on this freelance project. 
            I completely re-envisioned the site design & built the project from the ground up as an 
            extremely performant <strong>SSG website</strong>. I utilized development & design best practices with a focus on the 
            <strong>user experience.</strong>
        `,
        year: '2020',
        made_at: `Freelance`,
        key: 'di6476refdjrtjysagfasf',
        tech: {
            priority_list: ['Gatsby', 'Node Js', 'React'],
            featured_list: [],
            full_list: [
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
            ]
        },
        is_featured: true,
    }),
    projectFactory({
        name: 'Halcyon',
        full_name: 'Halcyon Center',
        url: 'https://www.visithalcyon.com',
        url_path: '/projects/halcyon',
        description: `
            I was one of the Front End Developers on the project primarily tasked with creating the movies 
            page and events directory. Across the project I worked with <strong>multiple API’s, 
            React Static</strong>, and developed <strong>clean code</strong> for other advanced React components.
        `,
        year: '2019',
        made_at: `Imaginuity`,
        key: 'direfd575fsg4sagfasffadsf',
        tech: {
            priority_list: ['React Static', 'Node Js', 'SCSS'],
            featured_list: [],
            full_list: [
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
            ]
        },
        is_featured: true,
    }),
    projectFactory({
        name: 'Stallion',
        full_name: 'Stallion Oilfield',
        url: 'https://www.stallionoilfield.com',
        url_path: '/projects/stallion',
        description: 'As the <strong>Lead Front End Developer</strong> on a <strong>complete website rebuild</strong>, I worked towards envisioning a website that would match their innovative Stallion attitude. The project was built with an <strong>emphasis</strong> on <strong>clean code</strong>, and <strong>modularity</strong>. The website includes multiple API’s, form verification, and other advanced modules.',
        year: '2019',
        made_at: `Imaginuity`,
        key: 'direfdstrh534asgdgvsfasf',
        tech: {
            priority_list: ['JavaScript', 'SCSS', 'PHP'],
            featured_list: [],
            full_list: [
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
            ]
        },
        is_featured: true,
    }),
    projectFactory({
        name: 'University Park',
        url: 'https://www.uptexas.org',
        url_path: '/projects/university-park',
        description: `
            I was tasked with being the <strong>sole developer</strong> on a 
            <strong>complete Front-End redesign</strong>. Keeping their current users in mind, 
            the goal was to make the website feel more modern, and offer a better user experience 
            when navigating to each individual page. Across the entire project I implemented several 
            dynamically generated content pages / sliders, <strong>form verification</strong>, 
            and several <strong>third party integrations</strong>.
        `,
        year: '2019',
        made_at: `Imaginuity`,
        key: 'diregfsfdsagfasyrtffdsav',
        tech: {
            priority_list: ['JavaScript', 'jQuery', 'Kentico'],
            featured_list: [],
            full_list: [
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
            ]
        },
        is_featured: true,
    }),
    projectFactory({
        name: 'Creative Revolt',
        url: 'https://www.writingrevolt.com',
        url_path: '/projects/creative-revolt',
        description: `
            This was a freelance project to <strong>rework the website layout</strong> and tailor the 
            feel of the website to her personal writing style. I <strong>revamped the color palette </strong>
            to better match her personality, adjusted her website for <strong>SEO</strong>, and 
            created the landing page as well as multiple pages across the platform.
        `,
        year: '2018',
        made_at: `Freelance`,
        key: 'direfdsagf6435643aysfkljkl',
        tech: {
            priority_list: ['jQuery', 'WordPress', 'PHP'],
            featured_list: [],
            full_list: [
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
            ]
        },
        images: {[
            {
                src: CreativeRevoltImg1,
                alt: `The landing page for Creative Revolt`,
            },
            {
                src: CreativeRevoltImg2,
                alt: `A call to action setup for Creative Revolt`,
            },
            {
                src: CreativeRevoltImg3,
                alt: `The about page for Creative Revolt`,
            },
            {
                src: CreativeRevoltImg4,
                alt: `A call to action exculusively design for Creative Revolt`,
            },
            {
                src: CreativeRevoltImg5,
                alt: `A page from creative revolt that introduces customers to her their courses`,
            },
        ]},
        is_featured: true,
    }),
]

