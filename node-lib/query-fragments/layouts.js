const ArchiveLayoutFragment = require("./archive/archive")
const HomeLayoutFragment = require("./home/home")
const ProjectsLayoutFragment = require("./projects/projects")

const Layouts = {
    home: HomeLayoutFragment,
    archive: ArchiveLayoutFragment,
    projects: ProjectsLayoutFragment,
}
  
module.exports = Layouts
  