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
                    filter_tags {
                        all
                        front_end
                        back_end
                        nodejs
                        html5
                        scss
                        javascript
                        uiux_design
                        php
                        kentico
                        react
                        gatsby
                    }
                }
                url
                url_path
                year
            }
        }
    }
`

module.exports = ProjectsLayoutFragment

// "All": "All",         
// "Front End": "Front End",
// "Back End": "Back End",
// "Node Js": "Node Js", 
// "HTML5": "HTML5",
// "SCSS": "SCSS", 
// "JavaScript": "JavaScript",
// "UI/UX Design": "UI/UX Design"