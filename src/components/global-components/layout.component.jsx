import React from "react"
import '../../styles/global.scss';

import Header from "./header/header.component"
import GlobalSettingsProvider from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout({ children }) {
  return (
    <GlobalSettingsProvider>
      <Header />
        {children}
      <Footer />
    </GlobalSettingsProvider>
  )
}
