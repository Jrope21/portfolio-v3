
import React from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalSettingsProvider from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout({ children }) {
  return (
    <GlobalSettingsProvider>
      <span 
        id={'top-of-page'}
        style={{ height: '0px', lineHeight: '0px' }}
      />
      <Header />
        {children}
      <Footer />
    </GlobalSettingsProvider>
  )
}
