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
    isFilterModalOpen,
    activateMountAnimations = false
}) {

    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(true);
    // }, [])

    return (
        <div className={`project-list-filters__module ${activateMountAnimations ? 'is-mounted' : ''} `}>
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
                    {listFilters.map(({ key, text }, i) => (
                        <div 
                            className={`list-filter-button fade-up__scoped`}
                            style={{ transitionDelay: `${500 + i * 50}ms` }}
                            key={key + i + 'project-list-filters'}
                        >
                            <FilterButton
                                className={`${activeFilterTag.key === key ? 'is-active' : ''}`}                          
                                onClick={() => filterProjects({ key,  text })}
                            >
                                {text}
                            </FilterButton>
                        </div>
                    
                    ))}
                </div>
            </div>
   
        </div>
    )
}
