
const ExperienceFragment = `
    experience {
        experience_list {
            end_year
            key
            location
            name
            start_year
            title
            job_description_bullets {
                key
                links
                text
            }
        }
    }
`

module.exports = ExperienceFragment
