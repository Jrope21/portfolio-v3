import React from 'react'

import ArchiveHero from '@archive-components/archive-hero/archive-hero.component'
import ProjectList from '@archive-components/project-list/project-list.component'

export default function ArchiveTemplate({
    pageContext: {
        pageData = {},
        featuredProjects = {},
        projects = {}
      } = {pageData: {}, featuredProjects: {}, projects: {}}
}) {

    const { hero, project_list } = pageData; 

    return (
        <main className="archive__template content-page-container container-vertical-spacer">
            <ArchiveHero
                title={hero.title}
                subTitle={hero.sub_title}
                featuredProjects={featuredProjects}
            />
            <ProjectList 
                tableFilters={project_list.table_filters}
                tableTitles={project_list.table_titles}
                allProjects={projects}
            />
        </main>
    )
}
