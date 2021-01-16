import React from 'react'
import './project-list.styles.scss'

import ProjectListFilters from '@archive-components/project-list-filters/project-list-filters.component'
import ProjectListTable from '@archive-components/project-list-table/project-list-table.component'
import { listFiltersData, projectsData, tableTitlesData } from './_data'

export default function ProjectList() {
    return (
        <section data-sal="mount" className="project-list__module"> 

            <div className="list-filters-container">
                <div className="design-element-line-container">
                    <span className="design-element-line" />
                </div>

                <ProjectListFilters listFilters={listFiltersData} />     
            </div>


            <ProjectListTable
                tableTitles={tableTitlesData}
                projects={projectsData}
            />
            
        </section>
    )
}
