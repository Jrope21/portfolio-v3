const ContactFragment = require("./modules/_contact")
const ExperienceFragment = require("./modules/_experience")
const FeaturedProjectsFragment = require("./modules/_featured-projects")
const HeroFragment = require("./modules/_hero")
const StatementAndSkillsFragment = require("./modules/_statement-and-skills")

const HomeLayoutFragment = `
    allHomePageJson {
        nodes {
            path
            template
            ${HeroFragment}
            ${ExperienceFragment}
            ${FeaturedProjectsFragment}
            ${StatementAndSkillsFragment}
            ${ContactFragment}
        }
    }
`

module.exports = HomeLayoutFragment
