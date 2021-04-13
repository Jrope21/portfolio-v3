import React, { createContext, useState } from "react"

const INITIAL_STATE = {
  activeMenuItem: {
    name: "Home",
    path: '/',
    children: []
  },
}

export const NavigationContext = createContext(INITIAL_STATE)

export default function NavigationProvider({ children }) {

  const [navigationContext, setNavigationContext] = useState(INITIAL_STATE)

  return (
    <NavigationContext.Provider 
        value={[navigationContext, setNavigationContext]}
    >
      {children}
    </NavigationContext.Provider>
  )
}
