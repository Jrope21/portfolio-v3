import React, { useRef, createRef, useContext } from "react"

import Hero from '@home-components/hero/hero.component'
import IndustryExperience from '@home-components/industry-experience/industry-experience.component'
import FeaturedProjects from '@home-components/featured-projects/featured-projects.component'
import StatementAndSkills from "@home-components/statement-and-skills/statement-and-skills.component"
import Contact from "@home-components/contact/contact.component"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'

const sectionNavNamesInOrder = [
  'Home',
  'Experience',
  'Projects',
  'About',
  'Contact'
]

export default function HomeTemplate() {

  const sectionRefs = useRef([0,1,2,3,4].map(() => createRef()));

  const [globalContextData, setGlobalContextData] = useContext(GlobalContext)
 
  useScrollPosition(({ prevPos, currPos }) => {

    const currentScrollY = Math.abs(currPos.y);
    
    for(let i = sectionNavNamesInOrder.length - 1; i >= 0; i--) {
      const elementScrollY = sectionRefs.current[i].current.offsetTop;

      if(elementScrollY < currentScrollY + 200) {
        setGlobalContextData({
          ...globalContextData,
          activeMenuItem: sectionNavNamesInOrder[i]
        })
        break;
      }
    }
  }, [])

  return (
    <main className="home__template">
      <span 
        id={'home'}
        style={{ height: '0px', lineHeight: '0px' }}
      />
      <Hero sectionRef={sectionRefs.current[0]} />
      <div className="container">
        <IndustryExperience sectionRef={sectionRefs.current[1]} />
        <FeaturedProjects sectionRef={sectionRefs.current[2]} />
        <StatementAndSkills sectionRef={sectionRefs.current[3]} />
        <Contact sectionRef={sectionRefs.current[4]} />
      </div>
    </main>
  )
}
