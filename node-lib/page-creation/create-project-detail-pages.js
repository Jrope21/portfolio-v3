const CONFIG = require("../config")

const content = require('../../content/content');

const createProjectDetailPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  content.projects.forEach(project => {
    if(project.url_path) createPage({
      path: project.url_path,
      component: CONFIG.TEMPLATES.PROJECT_DETAIL,
      context: {
        pageData: project,
      },
    })
  })
}

module.exports = createProjectDetailPages;
