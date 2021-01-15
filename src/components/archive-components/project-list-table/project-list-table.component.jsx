import React from 'react'
import './project-list-table.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'

import { generateKey } from '../../../helpers/_generate-key'

export default function ProjectListTable({ tableTitles = [], projects = [] }) {
    
    if(projects.length) return (
        <div className="project-list-table__module">

            <div className="table-titles-container">
                {tableTitles.map((title, i) => (
                    <h3 className={`table-title col-border table-col-${i + 1}`} key={generateKey(title)}>{title}</h3>
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
                    <div className="project-row" key={generateKey(name)}>
                        <div className="table-col-1 table-col col-border">
                            <span className="year">{year}</span>
                        </div>  
                        <div className="table-col-2 table-col col-border">
                            <p className="col-text">{name}</p>
                        </div>
                        <div className="table-col-3 table-col col-border">
                            <p className="col-text">{madeAt}</p>
                        </div>
                        <div className="table-col-4 table-col col-border">
                            <p className="col-text">{featuredTech}</p>       
                        </div>
                        <div className="table-col-5 table-col col-border links-container">

                            {projectLink ?
                                <a 
                                    href={projectLink} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <ExternalLinkIcon />
                                </a>
                            : 
                                <span>TBD</span>
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

    return null;
}
