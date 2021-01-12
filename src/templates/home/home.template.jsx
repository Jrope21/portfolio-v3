import React, { useState, useEffect, useRef, createRef, useContext } from "react"

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
  const heroAnimationDelay = 1100;

  const sectionRefs = useRef([0,1,2,3,4].map(() => createRef()));

  const [globalContextData, setGlobalContextData] = useContext(GlobalContext);

  // const [allViewedSections, setAllViewedSections] = useState({})
  const [isMounted, setIsMounted] = useState(false);
  const [isHeroAnimationsDone, setIsHeroAnimitionsDone] = useState(false);

  useEffect(() => {
      let isMounted = true;

      setIsMounted(true);

      setTimeout(() => {
        if(isMounted) setIsHeroAnimitionsDone(true)
      }, heroAnimationDelay)

      return (() => isMounted = false)
  }, [])
 
  useScrollPosition(({ prevPos, currPos }) => {

    const currentScrollY = Math.abs(currPos.y);
    // const updatedViewedSections = allViewedSections;
    
    // set to >= 1, so the menu won't change to "Home"
    for(let i = sectionNavNamesInOrder.length - 1; i >= 1; i--) {
      const elementScrollY = sectionRefs.current[i].current.offsetTop;

      if(elementScrollY < currentScrollY + 200) {
        setGlobalContextData({
          ...globalContextData,
          activeMenuItem: sectionNavNamesInOrder[i]
        })
        // updatedViewedSections[sectionNavNamesInOrder[i]] = true;
        // setAllViewedSections(updatedViewedSections);
        break;
      }
    }
  }, [])

  const setActiveSections = () => {

  }

  return (
    <main className="home__template">
      <span 
        id={'home'}
        style={{ height: '0px', lineHeight: '0px' }}
      />
      <Hero 
        activateAnimations={isMounted ? true : false}
        sectionRef={sectionRefs.current[0]} 
      />
      <div className="container">
        <IndustryExperience 
          // activateAnimations={allViewedSections['Experience'] ? true : false}
          activateAnimations={isHeroAnimationsDone ? true : false}
          sectionRef={sectionRefs.current[1]} 
        />
        <FeaturedProjects 
          sectionRef={sectionRefs.current[2]} 
        />
        <StatementAndSkills 
          sectionRef={sectionRefs.current[3]} 
        />
        <Contact 
          sectionRef={sectionRefs.current[4]} 
        />
      </div>
    </main>
  )
}
