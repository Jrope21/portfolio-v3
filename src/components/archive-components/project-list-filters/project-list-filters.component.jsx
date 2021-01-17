import React, { useState, useEffect } from 'react'
import './project-list-filters.styles.scss'

import FilterButton from '@archive-components/filter-button/filter-button.component'
import CloseButton from '@common-components/icons/close-button/close-button.component';

export default function ProjectListFilters({ 
    listFilters, 
    filterProjects, 
    activeFilterTag,
    openFilterModal,
    closeFilterModal,
    isFilterModalOpen
}) {

    // const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // const openMobileFilters = () => setIsFiltersVisible(true);
    // const closeMobileFilters = () => setIsFiltersVisible(false);

    // useEffect(() => {
    //     if(isFiltersVisible) document.body.classList.add('body-no-scroll');
    //     else document.body.classList.remove('body-no-scroll');

    //     return (()=> {
    //         document.body.classList.remove('body-no-scroll');
    //     })
    // }, [isFiltersVisible])

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <div className={`project-list-filters__module ${isMounted ? 'is-mounted' : ''}`}>
            <FilterButton 
                className="mobile-toggle-btn"
                onClick={openFilterModal}
            >
                Project Filters
            </FilterButton>



            <div className={`filter-buttons-outer-container ${isFilterModalOpen? ' is-visible activate-animations__scoped' : ''}`}>
                <CloseButton 
                    className="close-filters-btn" 
                    onClick={closeFilterModal}
                />
                <div className={`filter-buttons-inner-container`}>
                    {listFilters.map((filterText, i) => (
                        <FilterButton
                            className={`list-filter-button fade-up__scoped ${activeFilterTag === filterText ? 'is-active' : ''}`}
                            key={filterText + i + 'project-list-filters'}
                            style={{ transitionDelay: `${500 + i * 50}ms` }}
                            onClick={() => filterProjects(filterText)}
                        >
                            {filterText}
                        </FilterButton>
                    ))}
                </div>
            </div>
   
        </div>
    )
}
