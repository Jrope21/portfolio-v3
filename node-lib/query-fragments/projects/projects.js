const sharpWebpBase64Fragment = require("../commons/_sharp-webp-base64")

const ProjectsLayoutFragment = `
    allProjectsJson {
        edges {
            node {
                description
                github_link
                full_name
                id
                images {
                  alt
                  src {
                      ${sharpWebpBase64Fragment}
                  }
                }
                in_progress
                is_featured
                key
                made_at
                name
                tech {
                    featured_list
                    full_list
                    priority_list
                    filter_tags
                }
                url
                url_path
                year
            }
        }
    }
`

module.exports = ProjectsLayoutFragment
