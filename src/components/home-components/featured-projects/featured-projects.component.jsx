import React from 'react'
import './featured-projects.styles.scss'

import NumberedSectionTitle from '@home-components/numbered-section-title/numbered-section-title.component'

export default function FeaturedProjects() {
    return (
        <section className="featured-projects__module container">
            <div className="titles-container">
                <NumberedSectionTitle 
                    className="section-titles"
                    title="Projects I've Worked On" 
                    sectionNumber={'2'} 
                />
                <div className="text-title-cta">
                    <div className="top">
                        <span className="large-text-title">A</span>
                        <p className="sub-title">Use archive for the full list of projects I've worked on.</p>
                        {/* TODO -- turn into svg & sperate react component */}
                        <span className="pointer">
                            <span className="middle-line"></span>
                        </span>
                    </div>

                    <span className="bottom large-text-title">RCHIVE</span>
                </div>
            </div>
            


        </section>
    )
}
