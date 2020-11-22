import React from "react";

import { Helmet } from "react-helmet";

const config = require("../../lib/_config");

function SEO({ seo = {}, path = "/" }) {
  const {
    // isBlog, include this when post / blog support is added
    metaDesc = "",
    opengraphImage = null,
    opengraphTitle = "",
    title = "",
    twitterDescription = "",
    twitterImage = null,
    twitterTitle = "",
  } = seo

  return (
    <Helmet>
      <html lang="en" />
      <title>{opengraphTitle ? opengraphTitle : title}</title>
      <meta name="description" content={metaDesc} />
      <meta
        name="image"
        content={opengraphImage ? opengraphImage.mediaItemUrl : null}
      />

      {/* this is to block SEO -- REMOVE THIS FOR PRODUCTION */}
      <meta name="robots" content="noindex, nofollow" />

      {/* Schema org tags */}
      {/* <script>
        {JSON.stringify(schemaOrgJSON)}
      </script> */}
        
      {/* Google Tag Manager --- may have to load this via plugin to ensure it activates on gatsby client-side navigation? */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-856513074"
      ></script>
      <script>{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-856513074'); `}</script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={config.BASE_URL + path} />
      {/* {isBlog ? <meta property="og:type" content="article" /> : null} */}
      <meta
        property="og:title"
        content={opengraphTitle ? opengraphTitle : title}
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      <meta
        property="og:image"
        content={opengraphImage ? opengraphImage.mediaItemUrl : ""}
      />

      {/* Twitter Card Tags */}
      {/* <meta 
        property="twitter:card"
        content={'summary_large_image'}
      /> */}
      <meta property="twitter:uri" content={config.BASE_URL + path} />
      {/* <meta 
        property="twitter:creator"
        content={'squaqkvoices'}
      /> */}
      <meta
        property="twitter:title"
        content={
          twitterTitle ? twitterTitle : opengraphTitle ? opengraphTitle : title
        }
      />
      <meta
        property="twitter:description"
        content={
          twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
        }
      />
      <meta
        property="twitter:image"
        content={
          twitterImage
            ? twitterImage.mediaItemUrl
            : opengraphImage
            ? opengraphImage.mediaItemUrl
            : null
        }
      />
    </Helmet>
  )
}

export default SEO
