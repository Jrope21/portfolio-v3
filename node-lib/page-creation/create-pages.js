const CONFIG = require("../config")

const content = require('../../content/content');

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const featuredProjects = content.projects.filter(({ is_featured }) => is_featured);
  
  createPage({ // TODO -- combine these in loop (as project grows)
    path: '/',
    component: CONFIG.TEMPLATES.HOME_PAGE,
    context: {
      pageData: content.home_page,
      featuredProjects: featuredProjects
    },
  })

  createPage({ // TODO -- combine these in loop (as project grows)
    path: '/archive',
    component: CONFIG.TEMPLATES.ARCHIVE,
    context: {
      pageData: content.archive_page,
      projects: content.projects,
      featuredProjects: featuredProjects
    },
  })
}

module.exports = createPages
