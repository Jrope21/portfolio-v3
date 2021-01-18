import React, { useEffect, useState } from 'react'
import './project-list-table.styles.scss'

import { Link } from 'gatsby'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'
import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'
import GithubIcon from '@images/socials/github_icon_alt.svg';

import { generateKey } from '../../../helpers/_generate-key'

export default function ProjectListTable({ 
    tableTitles = [], 
    projects = [], 
    activeFilterTag = 'All' 
}) {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    if(projects.length) return (
        <div 
            className={`project-list-table__module fade-up__mount ${isMounted ? 'activate-animations__mount' : ''}`}
            style={{ transitionDelay: '800ms' }}
        >

            <div className="table-titles-container">
                {tableTitles.map((title, i) => (
                    <h3 
                        className={`table-title col-border table-col-${i + 1}`} 
                        key={title + 'project-table-titles' + i}
                    >{title}</h3>
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
                    githubLink,
                    filterTags
                }, i) => (
                    <div 
                        className={`
                            project-row 
                            is-visible
                        `}
                        // ${filterTags[activeFilterTag] ? 'is-visible' : ''}
                        key={name + 'project-table'}
                    >
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
                                    <ExternalLinkIcon altColor={true} />
                                </a>
                            : 
                                <span className="link-text">TBD</span>
                            }

                            {projectDetailPath &&
                                <Link to={projectDetailPath}>
                                    <JrPointer 
                                        className="project-detail-link-icon" 
                                        enableHoverAnimations={true}
                                    />
                                </Link>
                            }

                            {githubLink &&
                                <a 
                                    href={githubLink} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <GithubIcon />
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
