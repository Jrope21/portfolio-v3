import React, { useState } from 'react'
import './industry-experience.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'
import { experienceData } from './_data'


export default function IndustryExperience() {

    const [activeExperienceListing, setActiveExperienceListing] = useState(experienceData[0].key)

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
                        <li 
                            onClick={() => {
                                setActiveExperienceListing(key)
                                console.log(activeExperienceListing)
                            }}
                            className={`title-filter ${activeExperienceListing === key ? 'active' : ''}`} 
                            key={key + 'filters'}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right">
                {experienceData.map(experience => (
                    <div 
                        key={experience.key + 'job-listing'}
                        className={`job-listing ${activeExperienceListing === experience.key ? 'active' : ''}`}
                    >
                        <div className="location-and-dates-container">
                            <p className="job-location">
                                <span className="sr-only">{experience.name} is located at </span>
                                {experience.location}
                            </p>
                            <p className="job-dates">
                                <span className="sr-only">The dates I spent working at {experience.name}: </span>
                                {experience.startYear} {experience.endYear}
                            </p>
                        </div>
                        <h3 className="job-title">{experience.title}</h3>
                        {experience.links && 
                            <p className="job-links">
                                <span className="sr-only">Links relevant to my time at {experience.name}: </span>
                                <div 
                                    dangerouslySetInnerHTML={{ __html: experience.links }}
                                />
                            </p>
                        }        
                        <ul className="job-description-bullets">
                            {experience.jobDescriptionBullets.map(({ text, links }) => (
                                <li>
                                    {text}
                                    {links && 
                                        <div className="description-bullet-links">
                                            <span className="sr-only">Here's some website examples: </span>
                                            {links}
                                        </div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
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