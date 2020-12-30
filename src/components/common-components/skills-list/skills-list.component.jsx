import React from 'react'
import './skills-list.styles.scss'

export default function SkillsList({ skills, className = '', key, delay }) {
    return (
        <ul className={`skills-list__module list-animate__mount ${className}`}>
            {skills.map((skill, i) => (
                 <li 
                    key={'skills-list' + skill + key}
                    className="fade-up__mount"
                    style={{ transitionDelay: `${450 + i * 50}ms` }}
                >{skill}</li>
            ))}
        </ul>
    )
}
