import React from 'react'
import './projects-table.styles.scss'

import { generateKey } from '../../../helpers/_generate-key'

export default function ProjectsTable({ tableTitles, projects }) {
    return (
        <div className="projects-table__module">

            <div className="table-titles">
                {tableTitles.map(title => (
                    <h3 className="table-title" key={generateKey(title)}></h3>
                ))}
            </div>
                
            <div className="table-rows">
                {projects.map((project) => (
                    <div className="project-row" key={generateKey(project)}>

                    </div>
                ))}
            </div>

        </div>
    )
}
