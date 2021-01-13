import React from 'react'
import './project-list-filters.styles.scss'

import FilterButton from '@archive-components/filter-button/filter-button.component'

export default function ProjectListFilters() {
    return (
        <div className="project-list-filters__module">
            <FilterButton>
                Project Filters
            </FilterButton>
        </div>
    )
}
