import React from 'react'
import './projects-table.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'

import { generateKey } from '../../../helpers/_generate-key'

export default function ProjectsTable({ tableTitles, projects }) {
    return (
        <div className="projects-table__module">

            <div className="table-titles">
                {tableTitles.map((title, i) => (
                    <h3 className={`table-title table-col-${i + 1}`} key={generateKey(title)}>{title}</h3>
                ))}
            </div>
                
            {/* <div className="table-rows"> */}
                {projects.map(({
                    year,
                    name,
                    madeAt,
                    featuredTech,
                    projectLink,
                    projectDetailPath,
                    githubLink
                }) => (
                    <div className="project-row" key={generateKey(project)}>
                        <div className="table-col-1">
                            <span className="year">{year}</span>
                        </div>  
                        <div className="table-col-2">
                            <p>{name}</p>
                        </div>
                        <div className="table-col-3">
                            <p>{madeAt}</p>
                        </div>
                        <div className="table-col-4">
                            {featuredTech}
                        </div>
                        <div className="table-col-5 links-container">

                            {projectLink &&
                                <a 
                                    href={projectLink} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <ExternalLinkIcon />
                                </a>
                            }

                            {projectDetailPath &&
                                <Link to={projectDetailPath}>
                                    <ExternalLinkIcon />
                                </Link>
                            }

                            {githubLink &&
                                <a 
                                    href={githubLink} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <ExternalLinkIcon />
                                </a>
                            }
                           
                        </div>
                    </div>
                ))}
            {/* </div> */}

        </div>
    )
}
