import React, { useEffect, useState } from "react"
import "./dot-loader.styles.scss"

const DotLoader = ({ overlay = false, loading = false }) => {

  const [showElement, setShowElement] = useState(false)
  const [isFadeingOut, setIsFadeingOut] = useState(false)

  useEffect(() => {
    if(loading) setShowElement(true);
    else setTimeout(() => {
      setShowElement(false);
    }, 250)
  }, [loading])
  
  if(showElement) return (
    <div className={`dot-loader__module${loading ? ` loading` : ""}`}>
      {overlay && <div className={"overlay"}></div>}
      <div className={`loader`}>Loading...</div>
    </div>
  )
  return null;
}
export default DotLoader
