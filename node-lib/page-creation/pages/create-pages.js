const CONFIG = require("../../config")
const PagesQuery = require("./_pages-query")

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data: {allHomePageJson = {}, archivePageJson = {}} = {} } = await graphql(PagesQuery)

  createPage({
    path: "/",
    component: CONFIG.TEMPLATES.HOME_PAGE,
    context: { // TODO -- remove nodes... should be only one
      pageData: allHomePageJson.nodes[0],
    },
  })

  createPage({
    path: "/archive",
    component: CONFIG.TEMPLATES.ARCHIVE,
    context: {
      pageData: archivePageJson,
    },
  })
}

module.exports = createPages
