const layouts = require("../../query-fragments/layouts")

const ProjectsQuery = `
    query MyQuery {
        ${layouts.projects}
    }
`
module.exports = ProjectsQuery
