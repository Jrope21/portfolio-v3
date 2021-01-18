import React, { useState, useEffect } from 'react'
import './project-list-filters.styles.scss'

import FilterButton from '@archive-components/filter-button/filter-button.component'
import CloseButton from '@common-components/icons/close-button/close-button.component';

export default function ProjectListFilters({ 
    enablePageTransitions = true,
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
        <div className={`project-list-filters__module ${isMounted ? 'is-mounted' : ''} `}>
            <div 
                className="mobile-toggle-btn fade-up__mount"
                style={{ transitionDelay: `500ms` }}
            >
                <FilterButton 
                    onClick={openFilterModal}
                >
                    Project Filters
                </FilterButton>
            </div>
           



            <div className={`filter-buttons-outer-container ${!enablePageTransitions ? 'disable-page-animation' : ''} ${isFilterModalOpen? ' is-visible activate-animations__scoped' : ''}`}>
                <CloseButton 
                    className="close-filters-btn" 
                    onClick={closeFilterModal}
                />
                <div className={`filter-buttons-inner-container`}>
                    {listFilters.map((filterText, i) => (
                        <div 
                            className={`list-filter-button fade-up__scoped`}
                            style={{ transitionDelay: `${500 + i * 50}ms` }}
                            key={filterText + i + 'project-list-filters'}
                        >
                            <FilterButton
                                className={`${activeFilterTag === filterText ? 'is-active' : ''}`}
                            
                                onClick={() => filterProjects(filterText)}
                            >
                                {filterText}
                            </FilterButton>
                        </div>
                    
                    ))}
                </div>
            </div>
   
        </div>
    )
}
