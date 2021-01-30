const projectFactory =  require('./_project-factory')

const CreativeRevoltImg1 = require('./project-images/creative-revolt/1.jpg')
const CreativeRevoltImg2 = require('./project-images/creative-revolt/2.jpg')
const CreativeRevoltImg3 = require('./project-images/creative-revolt/3.jpg')
const CreativeRevoltImg4 = require('./project-images/creative-revolt/4.jpg')
const CreativeRevoltImg5 = require('./project-images/creative-revolt/5.jpg')

const StallionImg1 = require('./project-images/stallion/1.jpg')
const StallionImg2 = require('./project-images/stallion/2.jpg')
const StallionImg3 = require('./project-images/stallion/3.jpg')
const StallionImg4 = require('./project-images/stallion/4.jpg')
const StallionImg5 = require('./project-images/stallion/5.jpg')

const HalcyonImg1 = require('./project-images/halcyon/1.jpg')
const HalcyonImg2 = require('./project-images/halcyon/2.jpg')
const HalcyonImg3 = require('./project-images/halcyon/3.jpg')
const HalcyonImg4 = require('./project-images/halcyon/4.jpg')
const HalcyonImg5 = require('./project-images/halcyon/5.jpg')

const UniversityParkImg2 = require('./project-images/uptexas/2.jpg')
const UniversityParkImg3 = require('./project-images/uptexas/3.jpg')
const UniversityParkImg1 = require('./project-images/uptexas/1.jpg')
const UniversityParkImg4 = require('./project-images/uptexas/4.jpg')
const UniversityParkImg5 = require('./project-images/uptexas/5.jpg')

const DiRepairsImg1 = require('./project-images/di-repairs/1.png')
const DiRepairsImg2 = require('./project-images/di-repairs/2.png')
const DiRepairsImg3 = require('./project-images/di-repairs/3.png')
const DiRepairsImg4 = require('./project-images/di-repairs/4.png')
const DiRepairsImg5 = require('./project-images/di-repairs/5.png')

const projectsData = [
    projectFactory({
        year: `2021`,
        name: `Writing Revolt (v2)`,
        made_at: `Freelance`,
        tech: {
            featured_tech: ['Gatsby', 'React', 'Node Js', 'SASS', 'WordPress', 'PHP'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'Gatsby': 'Gatsby',
                'React': 'React', 
                'Node Js': 'Node Js', 
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
                'UI/UX Design': 'UI/UX Design'
            },
        }, 
        url: ``,
        url_path: ``,
        github_link: ``,
        in_progress: true,
    }),
    projectFactory({
        year: `2021`,
        name: `Classic Car Cowboy`,
        made_at: `Freelance`,
        tech: {
            featured_tech: ['Next', 'React', 'Node Js', 'SCSS', 'WordPress', 'PHP'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'React': 'React', 
                'Node Js': 'Node Js', 
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
                'UI/UX Design': 'UI/UX Design'
            },
        },   
        url: ``,
        url_path: ``,
        github_link: ``,
        in_progress: true,
    }),
    projectFactory({
        name: 'Di Repairs',
        full_name: 'Dialed-In Repiars',
        url: 'https://www.direpairs.com',
        url_path: '/projects/di-repairs',
        description: `
            <p>As the only <strong>developer & designer</strong> on this freelance project. 
            I completely re-envisioned the site design & built the project from the ground up as an 
            extremely performant <strong>SSG website</strong>. I utilized development & design best practices with a focus on the 
            <strong>user experience.</strong></p>
        `,
        year: '2020',
        made_at: `Freelance`,
        key: 'di6476refdjrtjysagfasf',
        tech: {
            priority_list: ['Gatsby', 'Node Js', 'React'],
            featured_list: ['Gatsby', 'React', 'Node Js', 'SASS', 'WordPress', 'PHP'],
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
            ],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'PHP': 'PHP',
                'UI/UX Design': 'UI/UX Design'
            }
        },
        images: [
            {
                src: DiRepairsImg1,
                alt: `The home page for DI-Repairs custom Gatsby website`,
            },
            {
                src: DiRepairsImg2,
                alt: `A multistep form with API integration on the DI-Repairs website`,
            },
            {
                src: DiRepairsImg3,
                alt: `A contact call-to-action for DI-Repairs custom Gatsby website`,
            },
            {
                src: DiRepairsImg4,
                alt: `A custom hero component on the DI-Repairs website`,
            },
            {
                src: DiRepairsImg5,
                alt: `Custom call-to-action's to various services on DI-Repairs`,
            },
        ],
        is_featured: true,
    }),
    projectFactory({
        year: `2020`,
        name: `Trinity Consultants`,
        made_at: `Imaginuity`,
        tech: {
            featured_tech: `React, Redux, SCSS, SiteFinity, Stripe, Ucommerce`,
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'React': 'React', 
                'Node Js': 'Node Js', 
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
            },
        }, 
        url: `https://www.trinityconsultants.com`,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        name: 'Halcyon',
        full_name: 'Halcyon Center',
        url: 'https://www.visithalcyon.com',
        url_path: '/projects/halcyon',
        description: `
            <p>I was one of the Front End Developers on the project primarily tasked with creating the movies 
            page and events directory. Across the project I worked with <strong>multiple API’s, 
            React Static</strong>, and developed <strong>clean code</strong> for other advanced React components.</p>
        `,
        year: '2019',
        made_at: `Imaginuity`,
        key: 'direfd575fsg4sagfasffadsf',
        tech: {
            priority_list: ['React Static', 'Node Js', 'SCSS'],
            featured_list: ['React', 'React Static', 'Node JS', 'SCSS', 'WordPress', 'PHP'],
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
            ],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'React': 'React',  
                'Node Js': 'Node Js', 
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
            }
        },
        images: [
            {
                src: HalcyonImg1,
                alt: `A call to action on the home page of the Halcyon Center Mall website`,
            },
            {
                src: HalcyonImg2,
                alt: `The home page for Halcyon Center Mall website`,
            },
            {
                src: HalcyonImg3,
                alt: `The dining directory page of the Halcyon Center Mall website`,
            },
            {
                src: HalcyonImg4,
                alt: `The events directory page of the Halcyon Center Mall website`,
            },
            {
                src: HalcyonImg5,
                alt: `A spotlight for businesses on the home page of the Halcyon Center Mall website`,
            },
        ],
        is_featured: true,
    }),
    projectFactory({
        year: `2019`,
        name: `We Buy Ugly House's`,
        made_at: `Imaginuity`,
        tech: {
            featured_tech: ['JavaScript', 'SCSS', 'HTML5', 'WordPress', 'PHP'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
            },
        }, 
        url: `https://www.webuyuglyhouses.com`,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        name: 'Stallion',
        full_name: 'Stallion Oilfield',
        url: 'https://www.stallionoilfield.com',
        url_path: '/projects/stallion',
        description: '<p>As the <strong>Lead Front End Developer</strong> on a <strong>complete website rebuild</strong>, I worked towards envisioning a website that would match their innovative Stallion attitude. The project was built with an <strong>emphasis</strong> on <strong>clean code</strong>, and <strong>modularity</strong>. The website includes multiple API’s, form verification, and other advanced modules.</p>',
        year: '2019',
        made_at: `Imaginuity`,
        key: 'direfdstrh534asgdgvsfasf',
        tech: {
            priority_list: ['JavaScript', 'SCSS', 'PHP'],
            featured_list: ['JavaScript', 'jQuery', 'PHP', 'SCSS', 'Webpack'],
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
            ],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
            }
        },
        images: [
            {
                src: StallionImg1,
                alt: `Stallion's location page for their custom website`,
            },
            {
                src: StallionImg2,
                alt: `A custom slider on the stallion website`,
            },
            {
                src: StallionImg3,
                alt: `The services page on Stallion's custom website`,
            },
            {
                src: StallionImg4,
                alt: `A unique hero image on Stallion's custom website`,
            },
            {
                src: StallionImg5,
                alt: `A page on stallion utilizing the google maps api`,
            },
        ],
        is_featured: true,
    }),
    projectFactory({
        year: `2019`,
        name: `HomeVestors`,
        made_at: `Imaginuity`,
        tech: {
            featured_tech: ['JavaScript', 'SCSS', 'HTML5', 'WordPress', 'PHP'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
            },
        },
        url: `https://www.homevestors.com`,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        year: `2019`,
        name: `Advancial`,
        made_at: `Imaginuity`,
        tech: {
            featured_tech: ['Javascript', 'jQuery', 'CSS', 'Kentico'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'Kentico': 'Kentico',
            },
        },  
        url: `https://www.advancial.org`,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        year: `2019`,
        name: `City of Denton`,
        made_at: `Imaginuity`,
        tech: {
            featured_tech: ['Javascript', 'jQuery', 'CSS', 'Kentico'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'Kentico': 'Kentico',
            },
        },
        url: `https://www.cityofdenton.com/en-us/`,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        name: 'University Park',
        url: 'https://www.uptexas.org',
        url_path: '/projects/university-park',
        description: `
            <p>I was tasked with being the <strong>sole developer</strong> on a 
            <strong>complete Front-End redesign</strong>. Keeping their current users in mind, 
            the goal was to make the website feel more modern, and offer a better user experience 
            when navigating to each individual page. Across the entire project I implemented several 
            dynamically generated content pages / sliders, <strong>form verification</strong>, 
            and several <strong>third party integrations</strong>.</p>
        `,
        year: '2019',
        made_at: `Imaginuity`,
        key: 'diregfsfdsagfasyrtffdsav',
        tech: {
            priority_list: ['JavaScript', 'jQuery', 'Kentico'],
            featured_list: ['Javascript', 'jQuery', 'CSS', 'Kentico'],
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
            ],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'Kentico': 'Kentico',
            },
        },
        images: [
            {
                src: UniversityParkImg1,
                alt: `The home page for the City of University Park website`,
            },
            {
                src: UniversityParkImg2,
                alt: `The library page for the City of University Park website`,
            },
            {
                src: UniversityParkImg3,
                alt: `The video modal on the City of University Park website`,
            },
            {
                src: UniversityParkImg4,
                alt: `The direct alarm monitoring form for the City of University Park website`,
            },
            {
                src: UniversityParkImg5,
                alt: `The newsletter page for the City of University Park website`,
            },
        ],
        is_featured: true,
    }),
    projectFactory({
        year: `2019`,
        name: `Personal Portfolio (v2)`,
        made_at: `Personal`,
        tech: {
            featured_tech: ['Svelte', 'Sapper', 'SCSS', 'Netlify'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'Node Js': 'Node Js', 
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'UI/UX Design': 'UI/UX Design'
            },
        },
        url: ``,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        name: 'Creative Revolt',
        url: 'https://www.writingrevolt.com',
        url_path: '/projects/creative-revolt',
        description: `
            <p>This was a freelance project to <strong>rework the website layout</strong> and tailor the 
            feel of the website to her personal writing style. I <strong>revamped the color palette </strong>
            to better match her personality, adjusted her website for <strong>SEO</strong>, and 
            created the landing page as well as multiple pages across the platform.</p>
        `,
        year: '2018',
        made_at: `Freelance`,
        key: 'direfdsagf6435643aysfkljkl',
        tech: {
            priority_list: ['jQuery', 'WordPress', 'PHP'],
            featured_list: ['JavaScript', 'WordPress', 'PHP', 'DiviBuilder'],
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
            ],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'WordPress': 'WordPress', 
                'PHP': 'PHP',
                'UI/UX Design': 'UI/UX Design'
            }
        },
        images: [
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
        ],
        is_featured: true,
    }),
    projectFactory({
        year: `2017`,
        name: `Personal Portfolio (v1) `,
        made_at: `Personal`,
        tech: {
            featured_tech: ['JavaScript', 'GSAP', 'CSS', 'HTML'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'UI/UX Design': 'UI/UX Design'
            },
        },    
        url: ``,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
    projectFactory({
        year: `2017`,
        name: `Mama's Messy Kitchen`,
        made_at: `Freelance`,
        tech: {
            featured_tech: ['JavaScript', 'CSS', 'BootStrap', 'HTML', 'PHP'],
            filter_tags: {
                'All': 'All',         
                'Front End': 'Front End',
                'Back End': 'Back End',
                'HTML5': 'HTML5',
                'SCSS': 'SCSS', 
                'JavaScript': 'JavaScript',
                'PHP': 'PHP',
                'UI/UX Design': 'UI/UX Design'
            },
        },
        url: ``,
        url_path: ``,
        github_link: ``,
        in_progress: false,
    }),
]

module.exports = projectsData;