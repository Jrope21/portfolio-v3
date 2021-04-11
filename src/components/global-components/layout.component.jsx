
import React, { useContext, useEffect, useState } from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalProvider from "./global.context"
import Footer from "./footer/footer.component"
import PageTransition from "./page-transition";

export default function Layout(props) {
  const { location, path, children } = props

  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [content, setContent] = useState(children);

  console.log('page props', props);
  useEffect(() => {
    setIsPageTransitioning(true)
    setTimeout(() => {
      setIsPageTransitioning(false)
      setContent(children)
    }, 450)
  }, [location.pathname])

  return (
    <div className="page-width-container">
      <div className="page-content-container">
        <GlobalProvider>
          <Header currentPath={path} />
            <PageTransition location={location}>
              {children}
            </PageTransition>
            {/* <div className={`transition-content-wrapper ${isPageTransitioning ? 'hide' : ''}`}>
              {content}
            </div>       */}
          <Footer />
        </GlobalProvider>
      </div>
    </div>
  )
}

// TODO -- add page transition 

// 1 => determine page has changed
// 2 => fade out content
// 3 => transition out navigation
// 4 => insert custom load bar
// 6 => place content (intro animations handled by template)
// 7 => transition in navigation`