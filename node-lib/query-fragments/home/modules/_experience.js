
const ExperienceFragment = `
    experience {
        numbered_section_details {
            section_number
            title
        }
        experience_list {
            end_year
            key
            location
            name
            start_year
            title
            links {
                href
                text
            }
            job_description_bullets {
                key
                links
                text
            }
        }
    }
`

module.exports = ExperienceFragment
