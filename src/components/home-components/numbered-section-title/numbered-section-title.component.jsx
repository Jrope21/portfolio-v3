import React from 'react'
import './numbered-section-title.styles.scss'

import One from '@images/section-numbers/01.svg';

export default function NumberedSectionTitle({title, sectionNumber, className}) {
    return (
        <div className={`numbered-section-title__module${className ? ` ${className}` : ''}`}>
            <img src={One} alt="A number indicating the website section"/>
            <h2 className="title">{title}</h2>
        </div>
    )
}
