import React from "react"

import Hero from '@home-components/hero/hero.component'
import IndustryExperience from '@home-components/industry-experience/industry-experience.component'

export default function Home() {
  return (
    <main className="home__template">
      <Hero />
      <IndustryExperience />
    </main>
  )
}
