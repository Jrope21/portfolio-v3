import React from 'react'
import './numbered-section-title.styles.scss'

import One from '@images/section-numbers/01.svg';
import Two from '@images/section-numbers/02.svg';
import Three from '@images/section-numbers/03.svg';
import Four from '@images/section-numbers/04.svg';


const numberIcons = {
    "1": One,
    "2": Two,
    "3": Three,
    "4": Four
}

export default function NumberedSectionTitle({title, sectionNumber = "1", className}) {
    return (
        <div className={`numbered-section-title__module${className ? ` ${className}` : ''}`}>
            <img src={numberIcons[sectionNumber]} alt="A number indicating the website section"/>
            <h2 
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    )
}
