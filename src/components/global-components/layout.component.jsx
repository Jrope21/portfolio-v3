
import React, { useContext } from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalProvider, { GlobalContext } from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout({ children }) {

  const [globalContextData, setGlobalContextData] = useContext(GlobalContext)

  return (
    <GlobalProvider>
      <span 
        id={'top-of-page'}
        style={{ height: '0px', lineHeight: '0px' }}
      />
      <Header />
        {children}
      <Footer />
    </GlobalProvider>
  )
}
