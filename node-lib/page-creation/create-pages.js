const CONFIG = require("../config")
const PagesQuery = require("./_pages-query")
const ProjectsQuery = require("./_projects-query")

const createPages = async ({ actions, graphql }) => { // TODO -- split this function up if it grows any??
  const { createPage } = actions

  const pagesData = await graphql(PagesQuery)
  const projectsData = await graphql(ProjectsQuery)
  
  const { allHomePageJson = {}, archivePageJson = {} } = pagesData.data
  const { allProjectsJson = {} } = projectsData.data

  const featuredProjects = allProjectsJson.edges.filter(({ node: project }) => project.is_featured);

  createPage({ // creates home page
    path: "/",
    component: CONFIG.TEMPLATES.HOME_PAGE,
    context: { 
      pageData: allHomePageJson.nodes[0],
      featuredProjects: featuredProjects
    },
  })

  createPage({ // creates archive page
    path: "/archive",
    component: CONFIG.TEMPLATES.ARCHIVE,
    context: {
      pageData: archivePageJson,
      featuredProjects: featuredProjects
    },
  })

  allProjectsJson.edges.forEach(({ node: project }) => { // creates project detail pages
    if(project.url_path) createPage({
        path: project.url_path,
        component: CONFIG.TEMPLATES.PROJECT_DETAIL,
        context: {
            pageData: project,
        },
    })
  })
}

module.exports = createPages
