const CONFIG = require("../../config")
const ProjectsQuery = require("./_projects-query")

const createProjects = async ({ actions, graphql }) => {
    const { createPage } = actions

    const { data: { allProjectsJson } = {} } = await graphql(ProjectsQuery);
    // const featuredProjects = allProjectsJson.edges.filter(({ is_featured }) => is_featured);

    allProjectsJson.edges.forEach(project => {
        if(project.url_path) createPage({
            path: project.url_path,
            component: CONFIG.TEMPLATES.PROJECT_DETAIL,
            context: {
                pageData: project,
            },
        })
    })
}

module.exports = createProjects
