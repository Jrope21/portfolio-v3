import React, { useState, useEffect, useRef, createRef, useContext } from "react"

import Hero from '@home-components/hero/hero.component'
import IndustryExperience from '@home-components/industry-experience/industry-experience.component'
import FeaturedProjects from '@home-components/featured-projects/featured-projects.component'
import StatementAndSkills from "@home-components/statement-and-skills/statement-and-skills.component"
import Contact from "@home-components/contact/contact.component"

import { useScrollPosition } from "@hooks/useScrollPosition"
import { GlobalContext } from '@global-components/global.context'
import useNavigationItems from "../hooks/useNavigationItems"

const sectionNavNamesInOrder = [
  'Home',
  'Experience',
  'Projects',
  'About',
  'Contact'
]

export default function HomeTemplate({
  pageContext: {
    pageData = {},
    featuredProjects = {}
  } = {pageData: {}, featuredProjects: {}}
}) {

  const { 
    hero: heroModuleData, 
    experience: experienceModuleData, 
    featured_projects: featuredProjectsModuleData, 
    contact: contactModuleData, 
    statement_and_skills: StatementAndSkillsModuleData
  } = pageData;

  const [navItems, setNavItems] = useNavigationItems();

  const heroAnimationDelay = 1100;

  const sectionRefs = useRef([0,1,2,3,4].map(() => createRef()));

  const [globalContextData, setGlobalContextData] = useContext(GlobalContext);

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
    
    // set to >= 1, so the menu won't change to "Home"
    for(let i = navItems.length - 1; i >= 1; i--) {
      const elementScrollY = sectionRefs.current[i].current.offsetTop;

      if(elementScrollY < currentScrollY + 200) {
        setGlobalContextData({
          ...globalContextData,
          activeMenuItem: navItems[i]
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
      <Hero 
        moduleData={heroModuleData}
        activateAnimations={isMounted ? true : false}
        sectionRef={sectionRefs.current[0]} 
      />
      <div className="container">
        <IndustryExperience 
          moduleData={experienceModuleData}
          activateAnimations={isHeroAnimationsDone ? true : false}
          sectionRef={sectionRefs.current[1]} 
        />
        <FeaturedProjects 
          moduleData={featuredProjectsModuleData}
          sectionRef={sectionRefs.current[2]} 
          featuredProjects={featuredProjects}
        />
        <StatementAndSkills 
          moduleData={StatementAndSkillsModuleData}
          sectionRef={sectionRefs.current[3]} 
        />
        <Contact 
          moduleData={contactModuleData}
          sectionRef={sectionRefs.current[4]} 
        />
      </div>
    </main>
  )
}
