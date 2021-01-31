const layouts = require("../../query-fragments/layouts")

const PagesQuery = `
    query MyQuery {
        ${layouts.home}
        ${layouts.archive}
    }
`
module.exports = PagesQuery
