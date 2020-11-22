import React from "react";
import Layout from "./src/components/global-components/layout.component"

export default function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
