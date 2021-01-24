import React from 'react'
import './archive-hero.styles.scss'

import ContentPageHeroTitles from '@common-components/content-page-hero-titles/content-page-hero-titles.component'
import SkillsList from '@common-components/skills-list/skills-list.component'

export default function ArchiveHero() {
    return (
        <section data-sal="mount" className="archive-hero__module">
             <ContentPageHeroTitles
                title={'The Archive'}
                subTitle={'A full list of projects I’ve worked on'}
            />

                <SkillsList
                    className="featured-projects-list"
                    title={'Featured'}
                    skills={[
                        `<a class="hover:text-underline" href="https://www.direpairs.com" rel="noopener noreferrer" target="_blank">
                            direpairs.com
                        </a>`,
                        `<a class="hover:text-underline" href="https://www.visithalcyon.com" rel="noopener noreferrer" target="_blank">
                            visithalcyon.com
                         </a>`,
                        `<a class="hover:text-underline" href="https://www.stallionoilfield.com" rel="noopener noreferrer" target="_blank">
                            stallionoilfield.com
                        </a>`,
                        `<a class="hover:text-underline" href="https://www.uptexas.org" rel="noopener noreferrer" target="_blank">
                            uptexas.org
                        </a>`,
                        `<a class="hover:text-underline" href="https://www.creativerevolt.com" rel="noopener noreferrer" target="_blank">
                            creativerevolt.com
                        </a>`,
                    ]} 
                />
        </section>
    )
}
