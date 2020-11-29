import React from "react"


import Hero from '@home-components/hero/hero.component'
import IndustryExperience from '@home-components/industry-experience/industry-experience.component'
import FeaturedProjects from '@home-components/featured-projects/featured-projects.component'
import StatementAndSkills from "@home-components/statement-and-skills/statement-and-skills.component"
import Contact from "@home-components/contact/contact.component"

export default function Home() {
  return (
    <main className="home__template">
      <Hero />
      <IndustryExperience />
      <FeaturedProjects />
      <StatementAndSkills />
      <Contact />
    </main>
  )
}
