import React from 'react'
import './archive-hero.styles.scss'

import ContentPageHeroTitles from '@common-components/content-page-hero-titles/content-page-hero-titles.component'
import SkillsList from '@common-components/skills-list/skills-list.component'
import { formatLinkText } from '../../../helpers/_format-link-text'

export default function ArchiveHero({
    title,
    subTitle,
    featuredProjects
}) {
    return (
        <section data-sal="mount" className="archive-hero__module">
             <ContentPageHeroTitles
                title={title}
                subTitle={subTitle}
            />

            <SkillsList
                className="featured-projects-list"
                title={'Featured'}
                skills={featuredProjects.map(({ node: project }) => `
                    <a class="hover:text-underline" href="${project.url}" rel="noopener noreferrer" target="_blank">
                        ${formatLinkText(project.url)}
                    </a>
                `)} 
            />
        </section>
    )
}