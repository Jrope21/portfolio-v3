import React from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import { experienceData } from './_data'


export default function IndustryExperience() {
    return (
        <section className="industry-experience__module container">
            <div className="left">
                <NumberedSectionTitle 
                    className="title-sections"
                    title="My Industry Experience" 
                    sectionNumber="1" 
                />
                <ul className="experience-title-filters">
                    {experienceData.map(({ key, name }) => (
                        <li className="title-filter" key={key}>
                            {name}
                        </li>
                    ))}
                </ul>
                this is a test
            </div>
            <div className="right">

            </div>
        </section>
    )
}

// {
//     name: 'Sally Beauty',
//     startYear: '2020',
//     endYear: '',
//     location: 'Denton, Texas',
//     title: 'Front End Developer at Sally Beauty',
//     links: ``,
//     jobDescriptionBullets: [
//         {
//             text: `Revamped the design with a bolder color palette / layout`,
//             links: ``
//         },
//         {
//             text: `Created the landing page and multiple sections utilizing WordPress (DiviBuilder)`,
//             links: ``
//         },
//         {
//             text: `Performed website updates and executed content audits`,
//             links: ``
//         },
//         {
//             text: `Adjusted the website for SEO and created marketable advertisements`,
//             links: ``
//         },
//     ]
// },