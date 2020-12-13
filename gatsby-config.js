/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
    siteUrl: `https://direpairsadmin.wpcomstaging.com`, // the url your frontend is hosted at
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/variables.scss";`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@home-components": "src/components/home-components",
          "@common-components": "src/components/common-components",
          "@global-components": "src/components/global-components",
          "@archive-components": "src/components/archive-components",
          "@project-detail-components": "src/components/project-detail-components",
          "@templates": 'src/templates',
          "@config": 'src/components/_config.js',
          "@hooks": "src/hooks",
          "@styles": "src/styles",
          "@images": "src/images",
        },
        extensions: [
          "js",
        ],
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}
