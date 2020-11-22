import React, { createContext, useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"


export const GlobalSettingsContext = createContext()

export default function GlobalSettingsProvider({ children }) {
  // const settingsData = useStaticQuery(
  //   graphql`
  //     query {
  //       wpgraphql {
  //         globalSettings {
  //           globalSettings {
  //             emergencyPhoneNumber
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  const [globalSettings, setGlobalSettings] = useState(
    'settingsData.wpgraphql.globalSettings.globalSettings'
  )

  return (
    <GlobalSettingsContext.Provider value={[globalSettings, setGlobalSettings]}>
      {children}
    </GlobalSettingsContext.Provider>
  )
}
