import React, { createContext, useState } from "react"

const INITIAL_STATE = {
  isPageTransitioning: false,
}

export const PageTransitionContext = createContext(INITIAL_STATE)

export default function PageTransitionProvider({ children }) {

  const [pageTransitionContext, setPageTransitionContext] = useState(INITIAL_STATE)

  return (
    <PageTransitionContext.Provider 
        value={[pageTransitionContext, setPageTransitionContext]}
    >
      {children}
    </PageTransitionContext.Provider>
  )
}
