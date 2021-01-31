const sharpWebpBase64Fragment = require("../../commons/_sharp-webp-base64")

const StatementAndSkillsFragment = `
    statement_and_skills {
        featured_image {
            alt
            src {
                ${sharpWebpBase64Fragment}
            }
        }
        numbered_section_details {
            section_number
            title
        }
        skills
        statement
    }
`

module.exports = StatementAndSkillsFragment
