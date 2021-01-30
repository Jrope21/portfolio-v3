import React, { useEffect, useState } from 'react'
import './project-list.styles.scss'

import ProjectListFilters from '@archive-components/project-list-filters/project-list-filters.component'
import ProjectListTable from '@archive-components/project-list-table/project-list-table.component'
import { listFiltersData, projectsData, tableTitlesData } from './_data'

// import projectDataTest from '../../../../content/projects/projects'

export default function ProjectList() {

    const [isMounted, setIsMounted] = useState(false);
    const [activeFilterTag, setActiveFilterTag] = useState('All');

    const [projects, setProjects] = useState(projectsData);

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isFilteringForProjects, setIsFilteringForProjects] = useState(false);
    // const [isFiltered, setIsFiltered] = useState(true);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        let isUnmounted = false;

        if (isMounted) {
            setIsFilteringForProjects(true);
            // closeFilterModal();
          
            setTimeout(() => {
                setProjects(
                    projectsData.filter(({ filterTags }) => filterTags[activeFilterTag])
                )
                closeFilterModal();
            }, 600)

            setTimeout(() =>{
                if(!isUnmounted) setIsFilteringForProjects(false);
            }, 1250)
        }

        return (() => isUnmounted = true)
    }, [activeFilterTag])
    
    const filterProjects = (filterTag) => setActiveFilterTag(filterTag);
    const openFilterModal = () => setIsFilterModalOpen(true);
    const closeFilterModal = () => setIsFilterModalOpen(false);

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
                    enablePageTransitions={!isFilteringForProjects}
                    listFilters={listFiltersData} 
                    filterProjects={filterProjects}
                    activeFilterTag={activeFilterTag}
                    openFilterModal={openFilterModal}
                    closeFilterModal={closeFilterModal}
                    isFilterModalOpen={isFilterModalOpen}
                />     
            </div>

            <div className={`filtering-modal ${isFilteringForProjects ? 'is-visible activate-animations__scoped' : ''}`}>
                <div className="filtering-modal-inner-container">
                    <span 
                        className="fade-up__scoped filtering-modal-text"
                        style={{ transitionDelay: '450ms' }}
                    >
                        Filtering
                    </span>
                    <span 
                        className="fade-up__scoped filtering-modal-text"
                        style={{ transitionDelay: '500ms' }}
                    >
                        {activeFilterTag}
                    </span>
                    <span 
                        className="fade-up__scoped filtering-modal-text"
                        style={{ transitionDelay: '550ms' }}
                    >
                        Projects
                    </span>
                </div>
            </div>


            <ProjectListTable
                tableTitles={tableTitlesData}
                projects={projects}
                activeFilterTag={activeFilterTag}
            />
            
        </section>
    )
}
