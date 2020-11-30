import React, { useRef, createRef } from "react"

import Hero from '@home-components/hero/hero.component'
import IndustryExperience from '@home-components/industry-experience/industry-experience.component'
import FeaturedProjects from '@home-components/featured-projects/featured-projects.component'
import StatementAndSkills from "@home-components/statement-and-skills/statement-and-skills.component"
import Contact from "@home-components/contact/contact.component"

import { useScrollPosition } from "../hooks/useScrollPosition"

const sectionNavNamesInOrder = [
  'Home',
  'Experience',
  'Projects',
  'About',
  'Contact'
]

export default function Home() {

  const sectionRefs = useRef([0,1,2,3,4].map(() => createRef()));

 
  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.y)
    // console.log(sectionRefs.current[1].current.offsetTop)
    const currentScrollY = Math.abs(currPos.y);
    
    // if(currentScrollY > sectionRefs.current[1].current.offsetTop) {
    //   console.log('scroll pos bihhhh')
    // }
    // const section
    for(let i = sectionNavNamesInOrder.length - 1; i >= 0; i--) {
      const elementScrollY = sectionRefs.current[i].current.offsetTop;
      // console.log('el scroll y', elementScrollY)
      if(elementScrollY < currentScrollY) {
        console.log(sectionNavNamesInOrder[i])
        break;
      }
    }
    // const isShow = currPos.y > prevPos.y
    // if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [])
  return (
    <main className="home__template">
      <Hero sectionRef={sectionRefs.current[0]} />
      <IndustryExperience sectionRef={sectionRefs.current[1]} />
      <FeaturedProjects sectionRef={sectionRefs.current[2]} />
      <StatementAndSkills sectionRef={sectionRefs.current[3]} />
      <Contact sectionRef={sectionRefs.current[4]} />
    </main>
  )
}
