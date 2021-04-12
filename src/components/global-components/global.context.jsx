import React, { createContext, useState } from "react"

const INITIAL_STATE = {
  activeMenuItem: "Home",
  isPageTransitioning: false,
}

export const GlobalContext = createContext(INITIAL_STATE)

export default function GlobalProvider({ children }) {

  const [globalContextData, setGlobalContextData] = useState(INITIAL_STATE)

  return (
    <GlobalContext.Provider value={[globalContextData, setGlobalContextData]}>
      {children}
    </GlobalContext.Provider>
  )
}
