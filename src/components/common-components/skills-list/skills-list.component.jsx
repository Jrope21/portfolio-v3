import React from 'react'
import './skills-list.styles.scss'

export default function SkillsList({ skills, className = '', key }) {
    return (
        <ul className={`skills-list__module ${className}`}>
            {skills.map(skill => (
                <li key={skill + key}>
                    {skill}
                </li>
            ))}
        </ul>
    )
}
