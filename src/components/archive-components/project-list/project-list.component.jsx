import React from 'react'
import './project-list.styles.scss'

import ProjectListFilters from '@archive-components/project-list-filters/project-list-filters.component'

export default function ProjectList() {
    return (
        <section data-sal="mount" className="project-list__module">

            <div className="design-element-line-container">
                <span className="design-element-line" />
            </div>

            <ProjectListFilters />
            
        </section>
    )
}
