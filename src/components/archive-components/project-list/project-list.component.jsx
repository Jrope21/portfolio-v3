import React, { useEffect, useState } from 'react'
import './project-list.styles.scss'

import ProjectListFilters from '@archive-components/project-list-filters/project-list-filters.component'
import ProjectListTable from '@archive-components/project-list-table/project-list-table.component'
import { listFiltersData, projectsData, tableTitlesData } from './_data'

export default function ProjectList() {

    const [isMounted, setIsMounted] = useState(false);
    const [projects, setProjects] = useState(projectsData)

    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    const filterProjects = (filterTag) => setProjects(
        projects.filter(({ filterTags }) => {
            if(filterTags[filterTag]) return true;
            return false;
        })
    )

    return (
        <section 
            // data-sal="mount" 
            className={`project-list__module ${isMounted ? 'activate-animations__mount' : ''}`}
        > 

            <div className="list-filters-container">
                <div className="design-element-line-container">
                    <span className="design-element-line" />
                </div>

                <ProjectListFilters 
                    listFilters={listFiltersData} 
                    filterProjects={filterProjects}
                />     
            </div>


            <ProjectListTable
                tableTitles={tableTitlesData}
                projects={projectsData}
            />
            
        </section>
    )
}
