import React, { useEffect, useState } from 'react'
import './project-list.styles.scss'

import ProjectListFilters from '@archive-components/project-list-filters/project-list-filters.component'
import ProjectListTable from '@archive-components/project-list-table/project-list-table.component'

export default function ProjectList({
    tableFilters,
    tableTitles,
    allProjects,
    activateMountAnimations
}) {
    const [activeFilterTag, setActiveFilterTag] = useState({ key: 'all', text: 'All' });

    const [projects, setProjects] = useState(allProjects);

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isFilteringForProjects, setIsFilteringForProjects] = useState(false);

    useEffect(() => {
        let isUnmounted = false;

        if (activateMountAnimations) {
            setIsFilteringForProjects(true);
            console.log(allProjects)
            setTimeout(() => {
                setProjects(
                    allProjects.filter(({node: { tech }}) => tech.filter_tags[activeFilterTag.key])
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
            className={`project-list__module ${activateMountAnimations ? 'activate-animations__mount' : ''}`}
        > 

            <div className="list-filters-container">
                <div className="design-element-line-container">
                    <span className="design-element-line" />
                </div>

                <ProjectListFilters 
                    enablePageTransitions={!isFilteringForProjects}
                    listFilters={tableFilters} 
                    filterProjects={filterProjects}
                    activeFilterTag={activeFilterTag}
                    openFilterModal={openFilterModal}
                    closeFilterModal={closeFilterModal}
                    isFilterModalOpen={isFilterModalOpen}
                    activateMountAnimations={activateMountAnimations}
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
                        {activeFilterTag.text}
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
                tableTitles={tableTitles}
                projects={projects}
                activeFilterTag={activeFilterTag}
                activateMountAnimations={activateMountAnimations}
            />
            
        </section>
    )
}
