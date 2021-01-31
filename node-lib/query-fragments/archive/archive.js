const HeroFragment = require("./modules/_hero")
const ProjectListFragment = require("./modules/_project-list")

const ArchiveLayoutFragment = `
    archivePageJson {
        path
        template
        ${HeroFragment}
        ${ProjectListFragment}
    }
`

module.exports = ArchiveLayoutFragment
