import React from 'react'

import ArchiveHero from '@archive-components/archive-hero/archive-hero.component'
import ProjectList from '@archive-components/project-list/project-list.component'

export default function ArchiveTemplate() {
    return (
        <main className="archive__template content-page-container container-vertical-spacer">
            <ArchiveHero />
            <ProjectList />
        </main>
    )
}
