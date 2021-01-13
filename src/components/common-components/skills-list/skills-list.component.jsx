import React from 'react'
import './skills-list.styles.scss'

export default function SkillsList({ title, skills, className = '', key }) {
    return (
        <div className={`skills-list__module list-animate__mount ${className}`}>
            {title && 
                <h3 
                    className="list-title fade-up__mount"
                    style={{ transitionDelay: `400ms` }}
                >{title}</h3>
            }
            <ul >
          
                {skills.map((skill, i) => (
                    <li 
                        key={'skills-list' + skill + key}
                        className="fade-up__mount"
                        style={{ transitionDelay: `${450 + i * 50}ms` }}
                        dangerouslySetInnerHTML={{ __html: skill }}
                    />
                ))}
            </ul>
        </div>
      
    )
}
