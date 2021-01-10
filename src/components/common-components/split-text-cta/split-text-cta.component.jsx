import React from 'react'
import './split-text-cta.styles.scss'

import { Link } from 'gatsby'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'
import TextDisplacement from '@common-components/text-displacement/text-displacement.component'

export default function TextTitleCta({
    title = '',
    numberOfTitleLettersOnTop = 1,
    description,
    urlPath = '',
    altColors = false,
    isProjectLink = false,
    deactivateLink = false,
    year,
    className = '',
    ...otherProps
}) {

    if(title && urlPath) return (
        <Link 
            to={urlPath}
            className={`
                is-link
                split-text-cta__module 
                ${altColors ? 'alt-colors' : ''} 
                ${urlPath ? 'has-arrow' : ''}
                ${isProjectLink ? 'is-project-link' : ''}
                ${className}
            `}
            {...otherProps}
        >
            <div className="top">
                <span className="large-text-title">{title.slice(0, numberOfTitleLettersOnTop)}</span>
                {!isProjectLink ? 
                    <p className="sub-title">{description}</p>
                :
                    <div className="year-and-text-container">
                         <TextDisplacement 
                            text={year}
                            textClassName="text-displacement-year-text"
                            containerClassName="text-displacement-year-container"
                        />
                        <p className="sub-title">{description}</p>
                    </div>
                }
                
                {!deactivateLink && 
                    <JrPointer
                        className="featured-title-pointer"
                        size={isProjectLink ? 'medium' : 'standard'}
                    />
                }
            </div>

            <span className="bottom large-text-title">{title.slice(numberOfTitleLettersOnTop)}</span>
        </Link>
    )


    if(title) return (
        <div 
            className={`
                split-text-cta__module 
                ${altColors ? 'alt-colors' : ''} 
                ${urlPath ? 'has-arrow' : ''}
                ${className}
            `}
            {...otherProps}
        >
            <div className="top">
                <span className="large-text-title">{title.slice(0, numberOfTitleLettersOnTop)}</span>
                <p className="sub-title">{description}</p>
            </div>

            <span className="bottom large-text-title">{title.slice(numberOfTitleLettersOnTop)}</span>
        </div>
    )
    return null;
}
