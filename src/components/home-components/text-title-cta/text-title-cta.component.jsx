import React from 'react'
import './text-title-cta.styles.scss'

import JrPointer from '@common-components/jr-pointer/jr-pointer.component'

export default function TextTitleCta({
    title = '',
    description,
    urlPath,
    altColors = false,
}) {


    if(title) return (
        <div 
            className={`text-title-cta__module ${altColors ? 'alt-colors' : ''} ${urlPath ? 'has-arrow' : ''}`}
        >
            <div className="top">
                <span className="large-text-title">{title[0]}</span>
                <p className="sub-title">{description}</p>
                {urlPath &&
                    <JrPointer
                        className="featured-title-pointer"
                    />
                }
            </div>

            <span className="bottom large-text-title">{title.slice(1)}</span>
        </div>
    )
    return null;
}
