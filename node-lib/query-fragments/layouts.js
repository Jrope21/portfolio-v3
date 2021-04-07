const ArchiveLayoutFragment = require("./archive/archive")
const GlobalsLayoutFragment = require("./globals/globals")
const HomeLayoutFragment = require("./home/home")
const ProjectsLayoutFragment = require("./projects/projects")

const Layouts = {
    home: HomeLayoutFragment,
    archive: ArchiveLayoutFragment,
    projects: ProjectsLayoutFragment,
    // globals: GlobalsLayoutFragment
}
  
module.exports = Layouts
  