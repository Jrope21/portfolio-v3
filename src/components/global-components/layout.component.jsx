
import React from "react"
import '../../styles/global.scss';

import Header from "./header/header.component"
import Footer from "./footer/footer.component"
import PageTransition from "./page-transition";

import PageTransitionProvider from "@context/page-transition";
import NavigationProvider from "@context/navigation";
import IntroAnimation from "./intro-animation";

export default function Layout({ location, path, children }) {

  return (
    <div className="page-width-container">
      <div className="page-content-container">
        {/* <IntroAnimation /> */}
        <PageTransitionProvider>
          <NavigationProvider>   
              <Header currentPath={path} />
                <PageTransition location={location}>
                  {children}
                </PageTransition>
              <Footer />
          </NavigationProvider>
        </PageTransitionProvider>
      </div>
    </div>
  )
}
