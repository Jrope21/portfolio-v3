
import React, { useContext } from "react"
import '../../styles/global.scss';


import Header from "./header/header.component"
import GlobalProvider from "./global.context"
import Footer from "./footer/footer.component"

export default function Layout(props) {

  console.log('page props', props);

  return (
    <div className="page-width-container">
      <div className="page-content-container">
        <GlobalProvider>
          <Header currentPath={props.path} />
            {props.children}
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
// 6 => place content (intro animattions handled by template)
// 7 => transition in navigation`