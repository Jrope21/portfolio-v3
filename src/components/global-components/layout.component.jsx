
import React, { useContext } from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalProvider from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout({ path, children }) {
  console.log('path', path)

  return (
    <div className="page-width-container">
      <div className="page-content-container">
        <GlobalProvider>
          <Header path={path} />
            {children}
          <Footer />
        </GlobalProvider>
      </div>
    </div>
  )
}
