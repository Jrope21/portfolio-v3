import React from "react"
import "./dot-loader.styles.scss"

const DotLoader = ({ overlay = false, loading = false }) => (
  <div className={`dot-loader__module${loading ? ` loading` : ""}`}>
    {overlay && <div className={"overlay"}></div>}
    <div className={`loader`}>Loading...</div>
  </div>
)

export default DotLoader
