
import React, { useContext } from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalProvider from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout({ children }) {

  return (
    <GlobalProvider>
      <Header />
        {children}
      <Footer />
    </GlobalProvider>
  )
}
