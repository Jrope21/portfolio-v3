import React from 'react'
import './project-list-table.styles.scss'

import ExternalLinkIcon from '@common-components/icons/external-link-icon/external-link-icon.component'
import JrPointer from '@common-components/icons/jr-pointer/jr-pointer.component'
import GithubIcon from '@images/socials/github_icon_alt.svg';

import JrLink from '../../common-components/jr-link/jr-link.component'

export default function ProjectListTable({ 
    tableTitles = [], 
    projects = [], 
    activateMountAnimations = false
}) {
    
    if(projects.length) return (
        <div 
            className={`project-list-table__module fade-up__mount ${activateMountAnimations ? 'activate-animations__mount' : ''}`}
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
                
            {projects.map(({ node: {
                year,
                name,
                made_at,
                url,
                url_path,
                tech,
                github_link,
            }}, i) => (
                <div 
                    className={`
                        project-row 
                        is-visible
                    `}
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
                            <JrLink 
                                href={url} 
                                isStyled={false}
                            >
                                <ExternalLinkIcon altColor={true} />
                            </JrLink>
                        : null}

                        {url_path &&
                            <JrLink 
                                to={url_path}
                                isStyled={false}
                            >
                                <JrPointer 
                                    className="project-detail-link-icon" 
                                    enableHoverAnimations={true}
                                />
                            </JrLink>
                        }

                        {github_link &&
                            <JrLink 
                                href={github_link} 
                                isStyled={false}
                            >
                                <GithubIcon />
                            </JrLink>
                        }

                        {!url && !url_path ? 
                            <span className="link-text">TBD</span>
                        : null}
                        
                    </div>
                </div>
            ))}

        </div>
    )

    return null;
}
