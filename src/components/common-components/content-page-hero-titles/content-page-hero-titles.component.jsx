import React from 'react'
import './content-page-hero-titles.styles.scss'

import TextDisplacement from '@common-components/text-displacement/text-displacement.component'
import JrLink from '@common-components/jr-link/jr-link.component'

export default function PageHeroTitles({ title, subTitle, linkText, href, year }) {
    return (
        <div className="content-page-hero-titles__module">
            <h1 className="project-title fade-up__mount">{title}</h1> 
            <div className="sub-text-container">

                {subTitle && 
                    <h2 
                        className="sub-title fade-up__mount"
                        style={{ transitionDelay: `100ms` }}
                    >{subTitle}</h2>
                }

                {linkText && href ? 
                    <div 
                        className="fade-up__mount project-link-container"
                        style={{ transitionDelay: `100ms` }}
                    >
                        <JrLink 
                            className="project-link" 
                            iconClassName="project-icon"
                            href={href} 
                        >{linkText}</JrLink>
                    </div>
                : null}

               {year ? 
                    <div 
                        className="text-displacement-year-container fade-up__mount"
                        style={{ transitionDelay: `200ms` }}
                    >
                        <TextDisplacement
                            text={year}
                            textClassName="text-displacement-year-text"
                        />
                    </div>
                : null}

            </div>
        </div>
    )
}
