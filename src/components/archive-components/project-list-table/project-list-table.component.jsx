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
                {projects.map(({ node: {
                    year,
                    name,
                    made_at,
                    // featuredTech,
                    // projectLink,
                    url,
                    url_path,
                    tech,
                    // projectDetailPath,
                    github_link,
                }}, i) => (
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
                            <p className="col-text">{made_at}</p>
                        </div>
                        <div className="table-col-4 table-col col-border">
                            <p className="col-text">
                                {tech.featured_list.map((tech, i) => `${i !== 0 ? ', ' : '' }${tech}`)}
                            </p>       
                        </div>
                        <div className="table-col-5 table-col col-border links-container">

                            {url && !url_path ?
                                <a 
                                    href={url} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <ExternalLinkIcon altColor={true} />
                                </a>
                            : null}

                            {url_path &&
                                <Link to={url_path}>
                                    <JrPointer 
                                        className="project-detail-link-icon" 
                                        enableHoverAnimations={true}
                                    />
                                </Link>
                            }

                            {github_link &&
                                <a 
                                    href={github_link} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <GithubIcon />
                                </a>
                            }

                            {!url && !url_path ? 
                                <span className="link-text">TBD</span>
                            : null}
                           
                        </div>
                    </div>
                ))}
            {/* </div> */}

        </div>
    )

    return null;
}
