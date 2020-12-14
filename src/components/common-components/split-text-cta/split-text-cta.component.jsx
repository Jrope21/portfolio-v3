import React from 'react'
import './split-text-cta.styles.scss'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'
import { Link } from 'gatsby'

export default function TextTitleCta({
    title = '',
    description,
    urlPath,
    altColors = false,
    isProjectLink = false,
    year
}) {

    if(title && urlPath) return (
        <Link 
            to="/"
            className={`
                split-text-cta__module 
                ${altColors ? 'alt-colors' : ''} 
                ${urlPath ? 'has-arrow' : ''}
                ${isProjectLink ? 'is-project-link' : ''}
            `}
        >
            <div className="top">
                <span className="large-text-title">{title[0]}</span>
                {!isProjectLink ? 
                    <p className="sub-title">{description}</p>
                :
                    <div className="year-and-text-container">
                        <div className="year">
                            <span className="text-displacement">
                                {year}
                            </span>
                        </div>
                        <p className="project-details">Project Details</p>
                    </div>
                }
                
                <JrPointer
                    className="featured-title-pointer"
                />
            </div>

            <span className="bottom large-text-title">{title.slice(1)}</span>
        </Link>
    )


    if(title) return (
        <div 
            className={`text-title-cta__module ${altColors ? 'alt-colors' : ''} ${urlPath ? 'has-arrow' : ''}`}
        >
            <div className="top">
                <span className="large-text-title">{title[0]}</span>
                <p className="sub-title">{description}</p>
            </div>

            <span className="bottom large-text-title">{title.slice(1)}</span>
        </div>
    )
    return null;
}
